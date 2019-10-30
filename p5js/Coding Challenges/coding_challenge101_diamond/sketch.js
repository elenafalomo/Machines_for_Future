function setup() {
  createCanvas(600, 600);
}

function draw() {
  line(0, 0, mouseX, mouseY);
  line(width, height, mouseX, mouseY);
}
