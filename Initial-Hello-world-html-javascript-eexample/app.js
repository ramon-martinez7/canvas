const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
  x: 200,
  y: 200,
  size: currentRadius,
  dx: 5,
  dy: 4,
};


function randomColorSelection() {
  var allowedColors = [
    "mediumpurple",
    "blue",
    "lightSeaGreen",
    "yellow",
    "orangeRed",
    "white",
    "red",
    "darkSeaGreen",
    "darkSlateGrey",
    "lavender",
    "teal",
    "cyan",
    "plum",
  ];
  return allowedColors[Math.floor(Math.random() * allowedColors.length)];
}

var currentColor = randomColorSelection();

function changeRadiusSize() {
  var allowedSizes = [30, 60, 90];
  return allowedSizes[Math.floor(Math.random() * allowedSizes.length)];
}
var currentRadius = changeRadiusSize();


function drawCircle(circle, ctx) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, currentRadius, 0, Math.PI * 2);
  ctx.fillStyle = currentColor;
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(circle, ctx);

  circle.x += circle.dx;
  circle.y += circle.dy;


  //detect side walls
  if (
    circle.x + currentRadius > canvas.width || circle.x - currentRadius < 0) {
    currentRadius = changeRadiusSize();
    circle.dx *= -1;
    currentColor = randomColorSelection();
  }

  if (
    circle.y + currentRadius > canvas.height ||
    circle.y - currentRadius < 0) {
    currentRadius = changeRadiusSize();
    circle.dy *= -1;
    currentColor = randomColorSelection();
  }

  requestAnimationFrame(update);


}

update();

//practice making functions/refactoring code to use functions where it makes sense, hence duplicating codes 
