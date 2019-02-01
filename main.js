var numRectangles = 5;
var colors = [];
var pickedColor;
var rectangles = document.querySelectorAll(".rectangle");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


init();

function init() {
    reset();
}

function reset() {
    colors = generateRandomColors(numRectangles);
    //change colorDisplay to match picked Color
    resetButton.textContent = "New Colors"
    //change colors of squares
    for (var i = 0; i < rectangles.length; i++) {
        if (colors[i]) {
            rectangles[i].style.display = "block"
            rectangles[i].style.background = colors[i];
        } else {
            rectangles[i].style.display = "none";
        }
    }
}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < rectangles.length; i++) {
        //change each color to match given color
        rectangles[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

