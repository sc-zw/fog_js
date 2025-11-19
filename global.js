let rows = 30;
let cols = 60;
let delay = 500;
let plot = document.getElementById("plot");
plot.style.top = "50px";
plot.style.fontSize = "20px";
//let flat = "\u2610";//
let flat = " ";

let chance = 0.01;
let fog = "\u2592";
let hill = "\u039B"
let A = flat + fog + hill;
let cells = new Array(rows * cols).fill(0);
