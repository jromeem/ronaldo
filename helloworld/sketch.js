
console.log("hello server!!");

let x = 100;
let y = 200;
let speed = 10;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(255, 0, 0);
  ellipse(x, y, 100, 100);
  x = x + speed;
  if (x > windowWidth || x < 0) {
    speed = speed * -1;
  }
}