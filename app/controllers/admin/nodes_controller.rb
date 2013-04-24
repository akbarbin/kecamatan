class Admin::NodesController < ApplicationController
  layout "testing"
  def index
    @nodes = Tabular.all
  end
end
