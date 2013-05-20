// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require plugins/jquery/jquery-1.9.1.min
//= require plugins/jquery/jquery-ui-1.10.1.custom.min
//= require plugins/jquery/jquery-migrate-1.1.1.min
//= require plugins/jquery/globalize
//= require plugins/other/excanvas
//= require plugins/other/jquery.mousewheel.min
//= require plugins/bootstrap/bootstrap.min
//= require plugins/cookies/jquery.cookies.2.2.0.min
//= require plugins/jflot/jquery.flot
//= require plugins/jflot/jquery.flot.stack
//= require plugins/jflot/jquery.flot.pie
//= require plugins/sparklines/jquery.sparkline.min
//= require plugins/mcustomscrollbar/jquery.mCustomScrollbar.min
//= require plugins/uniform/jquery.uniform.min
//= require plugins/fancybox/jquery.fancybox.pack
//= require plugins/datatables/jquery.dataTables.min
//= require plugins
//= require charts
//= require actions

$(document).ready(function(){
  // call data with fancybox;
  addDataWithFancyBox();
  editDataWithFancyBox();
  $('.field-tabular').hide();
  $('.update-all-btn-tabular').hide();
  $('.edit-tabular').click(function(){
    $('.field-tabular').show();
    $('.tabular-total').hide();
    $('.update-all-btn-tabular').show();
  });
});

/* Created by [muhamad.akbar@kiranatama.com] at Apr 16 2012,
 * Add data with fancybox, this is a general add data */
function addDataWithFancyBox(){
  $(".add-data").click(function(event){
    var href = $(this).attr('href');
    var idTabular = $(this).attr('id');
    var nameTabular = $(this).parent().find('.parent').text();
    console.log("cc"+href, "aa"+idTabular, "bb"+nameTabular);
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
          $('.parent-id').append(nameTabular);
          $('.parent-id').append("<input id=\"master_tabular_parent_id\" name=\"master_tabular[parent_id]\" type=\"hidden\" value=\""+idTabular+"\">");
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