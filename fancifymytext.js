function Hello(){
  alert('Hello World!');
}
function changeText(){
  document.getElementById("Text1").style.fontSize = "24pt";
}
function fancifyText(){
  document.getElementById("Text1").style.fontWeight = "bold";
  document.getElementById("Text1").style.textDecoration = "underline";
  document.getElementById("Text1").style.color = "blue";

}
function normalizeText(){
  document.getElementById("Text1").style.fontWeight = "normal";
  document.getElementById("Text1").style.textDecoration = "none";
  document.getElementById("Text1").style.color = "black";
}
function Moo(){
  document.getElementById("Text1").style.textTransform = "capitalize";
  var x = document.getElementById("Text1").value;
  var parts = x.split(".");
  y = parts.join("moo.");
  document.getElementById("Text1").value = y;

}
