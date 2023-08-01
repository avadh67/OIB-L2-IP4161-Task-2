// var typed = new typed("#text" , {
//   String:["Frontend Developer", "YouTuber", "Web Developer"],
//   typeSpeed:100,
//   backSpeed:100,
//   backplay:1000,
//   loop:true
// });

var text = [" Developer", " Fresher"];
var counter = 0;
var elem = document.getElementById("text");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}