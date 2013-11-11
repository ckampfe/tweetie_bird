$(document).ready(function() {
  $("#gettweets").submit(function( event ){
    event.preventDefault();
    // var $newTweetName = $(this);
    // var data = $newTweetName.serialize();
    var url = $( "#handle" ).val();
    $.get('/' + url, function(response){
      $('.response').html(response);
    });

  });
});
