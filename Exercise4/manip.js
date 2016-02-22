//This exercise is incomplete and does not work

var colorIndex = 0;
var colors = [];
var valid = false;

colors[0] = "black";
colors[1] = "blue";
colors[2] = "yellow";
colors[3] = "purple";
colors[4] = "green";
colors[5] = "red";

function changeBorder() {
  colorIndex = 0;
  var border = document.getElementById("border").value;
  var back = document.getElementById("back").value;
  var par = document.getElementsById("para");

  for (colorIndex = 0; colorIndex < 6; colorIndex++)
  {
    if (border == colors[colorIndex])
    {
      valid = true;
      break;
    }
    else
    {
      valid = false;
    }
  }

  if (valid)
  {
    par.border.color = color[colorIndex];
  }
  else {
    {
      alert("Invalid Color!");
    }
  }
}

function changeBack() {

}
