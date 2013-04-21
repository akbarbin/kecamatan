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
end
