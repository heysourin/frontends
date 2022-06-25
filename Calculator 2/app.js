let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
  //outputScreen.value=outputScreen.value + num
}
function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (e) {
    alert("Invalid Input");
  }
}

function Clear() {
  outputScreen.value = "";
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}