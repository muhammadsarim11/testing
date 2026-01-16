let editor = document.getElementById("editor");
let size = 18;

function UpperCase() {
  editor.value = editor.value.toUpperCase();
}
function LowerCase() {
  editor.value = editor.value.toLowerCase();
}
function Clear() {
  editor.value = "";
  editor.style.backgroundColor = "white";
  editor.style.color = "black";
  editor.style.fontSize = "18px";
  editor.style.textAlign = "left";

}
function Fontincrease() {
  size = size + 5;
  editor.style.fontSize = size + "px";
}
function Fontdecrease() {
  size = size - 5;
  editor.style.fontSize = size + "px";
}
function Blue() {
  editor.style.color = "blue";
}
function Red() {
  editor.style.color = "Red";
}
function Bgyellow() {
  editor.style.backgroundColor = "yellow";
}
function Bgorange() {
  editor.style.backgroundColor = "orange";
}
function Left() {
  editor.style.textAlign = "left";
}
function Center() {
  editor.style.textAlign = "center";
}
function Right() {
  editor.style.textAlign = "Right";
}
