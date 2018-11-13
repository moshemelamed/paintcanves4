var canvas = document.querySelector("#canvas");
var stopDraw = true;
var penColor = "black";
var penWidth = "2";
var penHight = "2";
var moshe = 0;
var line = 2;
var userDraw = function (event) {

    if (stopDraw) {
        var userPen = document.createElement("div");
        var canvas = document.querySelector("#canvas");
        canvas.appendChild(userPen);
    }
    var userStopDraw = function () {
        stopDraw = false;
    }

    if (line === 1) {
        penWidth = "10";
        penHight = "10";
        penColor = "white";
    }
    else if (line === 0) {
        penWidth = "1000";
        penHight = "2";
    }
    else {
        penWidth = "2";
        penHight = "2";
    }

    window.addEventListener("mouseup", userStopDraw);
    userPen.style.background = penColor;
    userPen.style.width = penWidth + "px";
    userPen.style.height = penHight + "px";
    var x = event.clientX - 13;
    var y = event.clientY - 15;
    var coord = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coord;
    userPen.style.position = "absolute";
    userPen.style.left = x + "px";
    userPen.style.top = y + "px";


    document.getElementById("white").addEventListener("click", function (e) {
        line = 1;

    });
    document.getElementById("line").addEventListener("click", function (e) {
        line = 0;
    });
    document.getElementById("red").addEventListener("click", function (e) {
        penColor = "red";
        line = 2;
    });
    document.getElementById("blue").addEventListener("click", function (e) {
        penColor = "blue";
        line = 2;

    });
    document.getElementById("yellow").addEventListener("click", function (e) {
        penColor = "yellow";
        line = 2;

    });
    document.getElementById("green").addEventListener("click", function (e) {
        penColor = "green";
        line = 2;

    });
    document.getElementById("black").addEventListener("click", function (e) {
        penColor = "black";
        line = 2;

    });
    document.getElementById("purple").addEventListener("click", function (e) {
        penColor = "purple";
        line = 2;

    });
}

var move = function () {
    stopDraw = true;
    canvas.addEventListener("mousemove", userDraw);
}
canvas.addEventListener("mousedown", move);
paintOptions = ["red", "blue", "yellow", "green", "black", "purple"];

var creatButt = function () {
    var coloroptions = document.getElementById("optionBar");
    for (var i = 0; i < paintOptions.length; i++) {
        var buttonItem = document.createElement("li");
        var newButton = document.createElement("button");
        newButton.style.backgroundColor = paintOptions[i];
        newButton.className = "button1";
        newButton.id = paintOptions[i];
        buttonItem.appendChild(newButton);
        coloroptions.appendChild(buttonItem);
    }
};
creatButt();
