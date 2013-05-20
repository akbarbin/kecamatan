class Export
  COLUMNS_EXPORT = %w(name unit ref_code)

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to generate to excel document.
  def self.generate(opts = {})
    report = Spreadsheet::Workbook.new
    sheet = report.create_worksheet
    sheet.name = opts[:filename].present? ? opts[:filename] : Time.now.to_i.to_s
    sheet.row(0).concat opts[:columns]

    opts[:data].each_with_index do |data, idx|
      sheet.row(idx+1).concat data
    end

    path = "#{Rails.root}/tmp/#{sheet.name}.xls"
    report.write path
    {filepath: path, status: File.readable?(path)}
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # Export excel
  # input: {object: @master_tabular, user: current_user, year: year}
  # process:
  # output : {filepath: path, status: File.readable?(path)}
  def self.export(opts = {})
    # to set and get name of template
    template = self.set_template(opts)

    report = Spreadsheet::Workbook.new
    sheet = report.create_worksheet
    sheet.name = "data_tabular_#{template[:tabular_name]}_kecamatan #{template[:user_name]}_#{template[:year]}"
    sheet.row(0).concat template[:row0]
    sheet.row(1).concat template[:row1]
    sheet.row(2).concat template[:row2]
    sheet.row(3).concat COLUMNS_EXPORT

    data = self.ancestry_options(opts[:object].descendants.arrange(:order => :created_at)) {|i| "#{i.name}" }

    data.each_with_index do |data, idx|
      sheet.row(idx+4).concat data
    end

    path = "#{Rails.root}/tmp/excel/#{sheet.name}.xls"
    report.write path
    {filepath: path, status: File.readable?(path)}
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # Import dummy data
  def self.import(excel, remove_after = false)
    workbook = Spreadsheet.open(excel)
    data = workbook.worksheet 0
    rows = data.row_count - 1
    parent_id = []
    parent_id[0] = nil
    units = {}
    Unit.all.each {|unit| units[unit.name] = unit.id}

    rows.times do |i|
      columns = data.row(i+2)
      4.times do |j|
        if columns[j+1].present?
          unit = nil
          if units[columns[12]].present?
            unit = units[columns[12]]
          end
          tabular = MasterTabular.create(
            name: columns[j+1],
            parent_id: parent_id[j],
            unit_id: unit
          )
          parent_id[j+1] = tabular.id
          break
        end
      end
    end
    FileUtils.rm(excel) if remove_after
  end

  # Created by: [muhamadakbarbw@gmail.com] at May 19 2013,
  # title: Import excel from user by data tabular
  # input: excel object tabular, year, user, total
  # process: get and update the tabular by input
  # output : total will be update with same format excel and database
  def self.import_value(opts = {}, remove_after = false)
    workbook = Spreadsheet.open(opts[:path])
    data = workbook.worksheet 0
    rows = data.row_count - 1
    columns_count = data.column_count
    year = data.row(2)[1]
    rows.times do |i|
      columns = data.row(i+4)
      columns_count.times do |j|
        if columns[j+1].present?
          if columns[j+1] > 0
            tabular = Tabular.find_by_name_and_year_and_user_id(columns[j], year, opts[:user].id)
            tabular.update_attributes(total: columns[j+1])
          end
        end
      end
    end
  end

  # Created by: [muhamadakbarbw@gmail.com] at May 19 2013,
  # title: Upload excel to public/uploads/files
  # input: tabular, remove_after default false
  # process: upload file
  # output : the file on public/uploads/files
  def self.upload_excel(tabular, remove_after = false)
    return {status: false} if tabular[:file].blank?
    name = tabular[:file].original_filename
    directory = "public/uploads/files"
    Dir.mkdir(directory) unless File.directory?(directory)
    path = File.join(directory, name)
    File.open(path, "wb") {|f| f.write(tabular[:file].read)}
    FileUtils.rm(path) if remove_after
    {status: true, path: path}
  end

  private
  def self.set_template(opts = {})
    tabular_name = opts[:object].present? ? opts[:object].name : Time.now.to_i.to_s
    user_name = opts[:user].present? ? opts[:user].name : Time.now.to_i.to_s
    year = opts[:year].present? ? opts[:year] : Time.now.year
    row0 = ["Kecamatan", user_name]
    row1 = ["Jenis Data", tabular_name]
    row2 = ["Tahun", year]
    {tabular_name: tabular_name, user_name: user_name, year: year, row0: row0,
      row1: row1, row2: row2}
  end

  def self.ancestry_options(items)
    result = []
    items.map do |item, sub_items|
      result << [yield(item), item.total, item.unit_id]
      result += ancestry_options(sub_items) {|i| "#{i.name}" }
    end
    result
  end

end