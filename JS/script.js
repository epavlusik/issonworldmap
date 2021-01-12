
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
var img = new Image();
img.src = "./Images/world2.jpg";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 3;

img.onload = function(){
ctx.drawImage(img, 0, 0, 564.6, 307.5);
}


async function getISSdata() {
const response = await fetch(api_url);
const data = await response.json();
const {latitude,longitude,visibility} = data;
document.getElementById('lat').textContent = latitude.toFixed(2);
document.getElementById('lon').textContent = longitude.toFixed(2);
document.getElementById('vis').textContent = visibility;
if(String(visibility) == "daylight") {
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("title").style.color = "black";
    document.getElementById("element1").style.backgroundColor = "white";
    document.getElementById("element2").style.backgroundColor = "white";
    document.getElementById("element3").style.backgroundColor = "white";
    document.getElementById("element1").style.color = "black";
    document.getElementById("element2").style.color = "black";
    document.getElementById("element3").style.color = "black";
    document.getElementById("bottom").style.color = "black";
}
else if(String(visibility) == "eclipsed") {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("title").style.color = "black";
    document.getElementById("element1").style.backgroundColor = "red";
    document.getElementById("element2").style.backgroundColor = "red";
    document.getElementById("element3").style.backgroundColor = "red";
    document.getElementById("element1").style.color = "white";
    document.getElementById("element2").style.color = "white";
    document.getElementById("element3").style.color = "white";
    document.getElementById("bottom").style.color = "black";
}
else {
    document.body.style.backgroundColor = "black";
    document.getElementById("title").style.color = "white";
    document.getElementById("APIdata").style.color = "black";
    document.getElementById("element1").style.backgroundColor = "yellow";
    document.getElementById("element2").style.backgroundColor = "yellow";
    document.getElementById("element3").style.backgroundColor = "yellow";
    document.getElementById("element1").style.color = "black";
    document.getElementById("element2").style.color = "black";
    document.getElementById("element3").style.color = "black";
    document.getElementById("bottom").style.color = "white";
}
var newlatitude = parseInt(latitude) * -1; // bola 14 a bol pri rovniku
var newlongitude = parseInt(longitude); // mal 133
ctx.drawImage(img, 0, 0, 564.6, 307.5);
ctx.beginPath();
ctx.arc(centerX + newlongitude*1.5, centerY + newlatitude*1.788, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'red';
ctx.fill();
ctxt.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
}

getISSdata();
setInterval(getISSdata, 10000);
