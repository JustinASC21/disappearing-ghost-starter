let inputText = $(".input");

// hide ghost
$(".hide-button").click(function() {
  $(".ghost-image").hide();
});

// show ghost
$(".show-button").click(function() {
  $(".ghost-image").show();
});
// name me 
$(".name-button").click(function() {
  $("h1").text("My name is " + inputText.val() + " and I am friendly!");
})
// update image
$(".update-img-button").click(function() {
  $(".ghost-image").attr("src","https://cdn.glitch.me/e305ff80-c6e8-43db-8f58-2459e07c1236%2Fghost.png?v=1635891963908");
});
// add messages
$(".message-button").click( function() {
  $(".message").append(inputText.val() + "<br>");
});