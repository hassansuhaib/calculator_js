//function for displaying values in the display area
function dis(val) {
  document.getElementById("display").value += val;
}
//function for calculation
function solve() {
  let x = document.getElementById("display").value;
  let y = eval(x);
  document.getElementById("display").value = y;
}
//function for clearing the display
function clr() {
  document.getElementById("display").value = "";
}