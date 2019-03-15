function setup() {
  // put setup code here
  createCanvas(480, 120);
}

function draw() {
  // put drawing code here
  background(204);
  strokeJoin(ROUND); //Round the stroke corners
  strokeWeight(10);
  rect(40,25,70,70);
  strokeJoin(BEVEL);
  rect(140, 25, 70, 70);
  strokeCap(SQUARE); // Square the line endings
  line(270, 25, 340, 95);
  strokeCap(ROUND); // Round the line endings
  line(350, 25, 420, 95);
}
