module ApplicationHelper
  def set_flash_name(name)
    case name
    when :alert
      "alert"
    when :error
      "error"
    when :notice
      "succes"
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at April 21 2013,
  # to display error in line.
  def display_error(model, field)
    if model.errors[field].any?
      raw model.errors[field].first
    end
  end

  # Created by [muhamadakbarbw@gmail.com] at May 9 2013,
  # to display error in line.
  def nested_master_tabulars(master_tabulars)
    master_tabulars.map do |master_tabular, sub_master_tabulars|
      render(master_tabular) + content_tag(:div, nested_master_tabulars(sub_master_tabulars), :class => "nested_master_tabulars")
    end.join.html_safe
  end
end
