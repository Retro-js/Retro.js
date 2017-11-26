
var user;
var img;
function preload() {
  img = loadImage("fondo.jpg");
}
function setup() {
  createCanvas(1400, 800);
  noStroke();
  user = new pacman(822, 500);
}

function draw() {
  background(0);
  field();
  user.move(2);
  user.display();
  console.log(mouseX, mouseY);
  if(user.x >= 1133){
    user.x = 515;
  }
  if(user.x <= 509){
    user.x = 1133;
  }
}
function field(){
  push();
  translate(500, 100);
  scale(3);
  image(img, 0, 0);
  pop();
}
