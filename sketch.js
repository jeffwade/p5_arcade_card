// Arcade Card
// An interactive card / rave display

// Global variables
let headlineFont, utilityFont;
let headline = 'Happy birthday to you.';
let c;


function preload() {
  c = loadJSON("colors.json");
  headlineFont = loadFont('assets/IBMPlexSerif-Bold.otf');
}

function setup() {
  let card = createCanvas(windowWidth, windowHeight);
  card.style('display', 'block');

  colorMode(HSB);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(c.teal.h, c.teal.s, c.teal.b, 0.3);
  // drawText(headlineFont, headline);
  ellipse(mouseX, mouseY, 20, 20);
}

function drawText(font) {
  // fill()
  fill('#aaa');
  textSize(48);
  text(headline, 200, 200);
}
