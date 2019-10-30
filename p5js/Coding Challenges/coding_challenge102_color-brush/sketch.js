let red = 255;
let sign = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(red, 120, 120);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);

  if (red <= 0 || red >= 255 ) {
    sign = sign * (-1);
  }

  red = red + sign;

}
