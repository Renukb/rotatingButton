var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
btn5.addEventListener("click", function () {
  var b1 = btn1.innerHTML;
  var b2 = btn2.innerHTML;
  var b3 = btn3.innerHTML;
  var b4 = btn4.innerHTML;
  var b5 = btn5.innerHTML;
  var b6 = btn6.innerHTML;
  var b7 = btn7.innerHTML;
  var b8 = btn8.innerHTML;
  var b9 = btn9.innerHTML;

  btn4.innerHTML = b7;
  btn1.innerHTML = b4;
  btn2.innerHTML = b1;
  btn3.innerHTML = b2;
  btn6.innerHTML = b3;
  btn9.innerHTML = b6;
  btn8.innerHTML = b9;
  btn7.innerHTML = b8;
});
