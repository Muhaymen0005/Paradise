// Constants
var r=255
var g=255
var b=255
const Y_AXIS = 2;
const X_AXIS = 2;
let value = 0;

function setup() {
  // put setup code here
  createCanvas(600,600);
  frameRate(10);
    // Define colors
  b1 = color("#FF69B4");
  b2 = color("#00FF61");
}
function draw() {
  // put drawing code here
  //background
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  fill("#FA5F55")
  strokeWeight(8);
  stroke("#FFD700");
  circle(300,280,350);
  fill("#C2B280")
  triangle(25,460,300,250,550,460);
  strokeWeight(4);
  stroke("#8000FF");
  fill("#FF008F");
  textSize(35);
  textFont('Harrington')
  strokeWeight(10)
  text("Sign Your Name", 180,550)  
  stroke(r,g,b)
  r=random(0,255);
  g=random(0,0);
  b=random(0,255);  
  fill("#002BFF");
  textSize(100);
  textFont('PlayBall');
  strokeWeight(6);
  text("Paradise",125,80);
  colorMode(HSB,260,100,100,100);
  rectMode(CENTER);
  noStroke()

}
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
function mouseDragged(){
  noStroke();
  fill(r,g,b,);
  ellipse(mouseX,mouseY,15,15);
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
}