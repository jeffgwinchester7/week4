// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    event.preventDefault()
    $("#unicorn").slideToggle(10000)
  });

})
