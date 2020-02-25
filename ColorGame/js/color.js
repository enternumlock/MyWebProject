// creating an array of 12 rgb colors
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 168, 33)",
  "rgb(150, 50, 50)",
  "rgb(255, 0, 255)",
  "rgb(255, 60, 145)",
  "rgb(45, 0, 255)",
  "rgb(0, 255, 255)"
];

// select colors from class .circle
var circles = document.querySelectorAll(".circle");
// picking a color at index 7 from array
var pickedColor = colors[7];
var colorDisplay = document.querySelector("#colorDisplay");
// create var massage display using id="#message"
var messageDisplay = document.querySelector("#message");

// displays the color name of pickedColor
colorDisplay.textContent = pickedColor;

// for loop to give color to all circles
for (var i = 0; i < circles.length; i++) {
    circles[i].style.background = colors[i];

    circles[i].addEventListener("click", function () {

        var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor); // prints the clicked color and picked color on console

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT";
            console.log("correct");
        } else {
            // change color to background color when wrong color is picked
            this.style.background = "#232323";
            // displaying message on span id = #message
            messageDisplay.textContent = "TRY AGAIN";
            console.log("Wrong color");
            //alert("wrong");
        }
    });
}
