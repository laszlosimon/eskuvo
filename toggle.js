$( document ).ready(function() {

 $('.panel-body').hide();


$('.panel-heading').on('click', function(){

  var panelId= $(this).attr('data-panelid');
  

  $('#'+panelId).slideToggle(200);
});

}); 