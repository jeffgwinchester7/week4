// get a random integer between 1 and 6 - getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





$(function() {
  $(".roll").on("click", function(event) {
    event.preventDefault()
    $("#d1").attr("src", "http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
    $("#d2").attr("src", "http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
    $("#d3").attr("src", "http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
    $("#d4").attr("src", "http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
    $("#d5").attr("src", "http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
    $("#d6").attr("src", "http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
})

})
