$( document ).ready(function() {
    console.log( "ready!" );
$('.igy').hide();

$('#varos').on('click', function(){
  $('.igy').slideToggle(200);
});
});
