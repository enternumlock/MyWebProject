/* creating an array of 12 rgb colors
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
*/
// generating 12 random color inn array
var colors = generateRandomColor(12);

// select colors from class .circle
var circles = document.querySelectorAll(".circle");
// picking a color at index 7 from array
// var pickedColor = colors[7];
// select random color and call pickColor function
var pickedColor = pickColor();
console.log(pickedColor);

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
            // it will give all circles the same color as the pickedColor has
            changeColor(clickedColor);
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

// creating changeColor function, give parameter color
function changeColor(color) {
    //loop through all circles
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.background = color;
    }
}


// creating function pickColor to select random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// create function randomColor
function randomColor() {
    // pick "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    // returning rgb(r, g, b) color
    return "rgb(" + r + ", " + g + ", " + b +")";
}

// creating function generateRandomColor, pass para "num"
function generateRandomColor(num) {
    // create an empty array
    var arr = [];

    for (var i = 0; i < num; i++) {
        // adding randomColor to array bu calling randomColor()
        arr.push(randomColor());
    }

    // return array
    return arr;
}
