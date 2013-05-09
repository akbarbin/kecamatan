class Tree
  attr_accessor :children, :parent_id
  def self.convert_data_tree(data)
    array_data = []
    data.each do |item|
      array_data[item[:id]] = item
      array_data[item[:id]]["children"] = []
    end
    
  end

  def mapping()
    
  end

  def self.test_tree_data
    data = [{:id => 1, :name => "aa", :parent_id => nil},
      {:id => 2, :name => "bb", :parent_id => nil},
      {:id => 3, :name => "a1", :parent_id => 1},
      {:id => 4, :name => "a2", :parent_id => 1},
      {:id => 5, :name => "a1a", :parent_id => 3},
      {:id => 6, :name => "a1b", :parent_id => 3},
      {:id => 7, :name => "a2a", :parent_id => 4},
      {:id => 8, :name => "b1a", :parent_id => 2},
      {:id => 9, :name => "b1a1a", :parent_id => 8},
      {:id => 10, :name => "b1a1a1a", :parent_id => 9}]
    tree_data = Tree.convert_data_tree(data)
  end
end