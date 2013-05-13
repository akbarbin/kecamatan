class Export
  
  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to generate to excel document
  def self.generate(opts = {})
    report = Spreadsheet::Workbook.new
    sheet = report.create_worksheet
    sheet.name = opts[:filename].present? ? opts[:filename] : Time.now.to_i.to_s
    sheet.row(0).concat opts[:columns]

    opts[:data].each_with_index do |data, idx|
      sheet.row(idx+1).concat data
    end

    path = "#{Rails.root}/tmp/#{sheet.name}.xls"
    file = report.write path
    return {:filepath => path, :status => File.readable?(path)}
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # Export dummy data
  def self.export(excel, remove_after = false)
    workbook = Spreadsheet.open(excel)
    data = workbook.worksheet 0
    id = data.row(2)[1]
    rows = data.row_count - 1
    rows.times do |i|
      columns = data.row(i+7)
      next if columns[0].blank?
      ancestry = Export.get_space(columns[0], id)
      MasterTabular.create(
        name: columns[0],
        ancestry: ancestry
      )
    end
    FileUtils.rm(excel) if remove_after
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # Import dummy data
  def self.import(excel, remove_after = false)
    workbook = Spreadsheet.open(excel)
    data = workbook.worksheet 0
    rows = data.row_count - 1
    parent_id = []
    parent_id[0] = nil
    rows.times do |i|
      columns = data.row(i+2)
      4.times do |j|
        if columns[j+1].present?
          tabular = MasterTabular.create(
            name: columns[j+1],
            parent_id: parent_id[j]
          )
          parent_id[j+1] = tabular.id
          break
        end
      end
    end
    FileUtils.rm(excel) if remove_after
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # get space name to determine ancestry.
  def self.get_space(name, id)
    ancestry = ""
    size = name.scan(/\s/).size
    puts size
    #    case size
    #    when 7
    #      ancestry = id
    #    else
    #      ancestry = 1
    #    end
    #    ancestry
  end
end