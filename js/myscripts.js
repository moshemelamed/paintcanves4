var canvas = document.querySelector("#canvas");
var stopDraw = true;
var penColor = "";
var penWidth = "2";
var penHight = "2";
var moshe = 0;
var userDraw = function (event) {

    if (stopDraw) {
        var userPen = document.createElement("div");
        var canvas = document.querySelector("#canvas");
        canvas.appendChild(userPen);
    }
    var userStopDraw = function () {
        stopDraw = false;
    }
    if (penColor !== "white") {
        penWidth = "2";
        penHight = "2";
    }else{
        penWidth = "10";
        penHight = "10";
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
        penColor = "white";
        penWidth = "50";
        penHight = "50";
    });
    document.getElementById("red").addEventListener("click", function (e) {
        penColor = "red";
    });
    document.getElementById("blue").addEventListener("click", function (e) {
        penColor = "blue";
    });
    document.getElementById("yellow").addEventListener("click", function (e) {
        penColor = "yellow";
    });
    document.getElementById("green").addEventListener("click", function (e) {
        penColor = "green";
    });
    document.getElementById("black").addEventListener("click", function (e) {
        penColor = "black";
    });
    document.getElementById("purple").addEventListener("click", function (e) {
        penColor = "purple";
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
