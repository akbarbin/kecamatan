class Admin::NodesController < ApplicationController
  layout "testing"

  def index
    @nodes = Node.all
  end
end
