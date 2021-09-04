// Arcade Card
// An interactive card / rave display

// Global variables
let headlineFont, utilityFont;
let headline, orts;
let c;

let i = j = 0;

function preload() {
  c = loadJSON("colors.json");
  headlineFont = loadFont('assets/Sansita-Black.ttf');
  utilityFont = loadFont('assets/IBMPlexSerif-Bold.otf');
}

function setup() {
  let card = createCanvas(windowWidth, windowHeight);
  card.style('display', 'block');
  // headline = prompt('Type the headline here.');
  headline = "Black lives matter.";
  orts = chunkString(headline, 3);
  console.log( orts );
  colorMode(HSB);
  noCursor();
  // frameRate(3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(c.teal.h, c.teal.s, c.teal.b, 0.3);
  ellipse(mouseX, mouseY, 20, 20);
  i += .03;
  (j > orts.length) ? i = j = 0 : j = floor(i);
  drawText(orts[j], headlineFont, c.black, width/2, width/2, height/2);
  // console.log( `i: ${i}, j: ${j}` );
}

function drawText(txt, font, col, size, x, y) {
  fill(col.h, col.s, col.b);
  textAlign(CENTER, CENTER);
  textSize(size);
  textFont(font);
  text(txt, x, y - height/8);
}

// Take a string and chunk it out into an array of 
// substrings that are not more than maxChars in length
function chunkString(txt, maxChars) {
  let index = 0;
  // Remove spaces from txt
  let phrase = txt.split(" ").join('');
  let end;
  let chunks = [];

  // Make and array of substrings of variable length
  while (index < phrase.length) {
    end = ceil(random(maxChars));
    chunks.push(phrase.substr(index, end));
    index += end;
  }

  return chunks;
}
