$(document).ready(function() {
  $("#gettweets").submit(function( event ){
    event.preventDefault();
    $( "#loader").css("display", "block");
    // var $newTweetName = $(this);
    // var data = $newTweetName.serialize();
    var url = $( "#handle" ).val();
    $.get('/' + url, function(response){
      $('.response').html('').html(response);
      var loader = "<img src=\"image\/ajax-loader.gif\" style=\"display: none;\" id=\"loader\">";

      $( ".response" ).append(loader)
    });

    

  });
});
