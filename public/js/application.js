/* hideous procedural js */

$(document).ready(function() {

  // getting tweets
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

  // sending an update
  $( "#sendtweet" ).submit( function ( event ) {
    event.preventDefault();
    $( "#sendtweet" ).hide();
    $.post( "/tweet", $( "#sendtweet" ).serialize(), function( response ) {
      var statusCode = JSON.parse(response).status;
      console.log(statusCode);
      if (statusCode == "ack") {
        $( ".tweet_status" ).html("<p>Success!</p>");
      } else if (statusCode == "nack") {
        $( ".tweet_status" ).html("<p>Error, try again</p>");
      }
    });
  });
});
