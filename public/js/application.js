$(document).ready(function() {
  $("#gettweets").submit(function( event ) {
    event.preventDefault();
    var url = $( "#handle" ).val();
    var loader = "<img src=\"image\/ajax-loader.gif\" style=\"display: none;\" id=\"loader\">";

    $( "#loader").css("display", "block");
    $.get('/' + url, function(response){
      $('.response').html('').html(response);
      $( ".response" ).append(loader)
    });
  });


  $( "#sendtweet" ).submit( function ( event ) {


  });





});
