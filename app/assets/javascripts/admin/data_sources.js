$(document).ready(function(){
  // call data with fancybox;
  addDataWithFancyBox();
  editDataWithFancyBox();
});

/* Created by [muhamad.akbar@kiranatama.com] at Apr 16 2012,
 * Add data with fancybox, this is a general add data */
function addDataWithFancyBox(){
  $(".add-data").click(function(event){
    var href = $(this).attr('href');
    var idTabular = $(this).attr('id');
    var nameTabular = $(this).parent().find('.parent').text();
    $.ajax({
      url: href,
      success:function(data){
        $.fancybox(data, {
          'transitionIn'  : 'elastic',
          'transitionOut' : 'elastic',
          'speedIn'       : 600,
          'speedOut'      : 200
        });
        if ($.isNumeric(idTabular)){
          $('#tabular_parent_id').parent().append(nameTabular);
          $('#tabular_parent_id').replaceWith("<input id=\"tabular_parent_id\" name=\"tabular[parent_id]\" type=\"hidden\" value=\""+idTabular+"\">");
        }
      }
    });
    event.preventDefault();
  })
}

/* Created by [muhamad.akbar@kiranatama.com] at Apr 16 2012,
 * Edit data with fancybox, this is a general edit data */
function editDataWithFancyBox() {
  $(".edit-data").bind("click", function(event){
    var href = $(this).attr('href');
    $.ajax({
      url: href,
      success:function(data){
        $.fancybox(data, {
          'transitionIn'  : 'elastic',
          'transitionOut' : 'elastic',
          'speedIn'       : 600,
          'speedOut'      : 200
        });
      }
    });
    event.preventDefault();
  })
}