var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(200, 200);
  centerCanvas();
  background(250, 0, 200);
}

function windowResized() {
  centerCanvas();
}

function draw(){

  ellipse(50, 50, 80, 80);
}
