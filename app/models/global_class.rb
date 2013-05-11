class GlobalClass
  # change to constant
  def self.button_create
    "Simpan"
  end

  def self.button_update
    "Ubah"
  end

  # Created by [muhamadakbarbw@gmail.com] at April 16 2013,
  # to get option select all table
  def self.options_select(object)
    object.order('name').map{|c|[c.name, c.id]}.unshift([PROMPT_OPTION, nil])
  end
end