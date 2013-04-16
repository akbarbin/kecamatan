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
end
