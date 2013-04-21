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
end