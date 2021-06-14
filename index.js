var random1 = Math.floor( Math.random() * 6) + 1;
var path1 = "images/dice" + random1+  ".png";

document.getElementsByClassName("img1")[0].src = path1;

var random2 = Math.floor( Math.random() * 6) + 1;
var path2 = "images/dice" + random2 + ".png";

document.getElementsByClassName("img2")[0].src = path2;

if(random1===random2) {
  document.getElementsByClassName("result")[0].innerHTML="Draw";
}
else if (random1>random2) {
  document.getElementsByClassName("result")[0].innerHTML="✌🏻 Player 1 wins";
}
else {
  document.getElementsByClassName("result")[0].innerHTML="Player 2 wins ✌🏻";
}
