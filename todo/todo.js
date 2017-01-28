// This code runs when the page loads
$(function() {

  $(".thumbnail").on("click", function(event) {
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    elementThatWasClicked.parent().remove()
  })

  $(".todobutton").on("click", function(event) {
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    elementThatWasClicked.parent().remove()
  })

})
