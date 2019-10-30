let alpha = 255;
let diameter = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(255, 120, 120, alpha);
  ellipse(mouseX, mouseY, diameter, diameter);
  alpha --;

  if (mouseX <= diameter/2 || mouseY <= diameter/2 ||
      mouseX >= width-diameter/2 || mouseY >= height-diameter/2){
    alpha = 255;
  }
}
