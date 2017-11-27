
var user;
var img;
var redGhost;
var yellowGhost;
function preload() {
  img = loadImage("fondo.jpg");
}
function setup() {
  createCanvas(1400, 800);
  noStroke();
  user = new pacman(822, 500);
  redGhost = new ghost(819, 367, 255, 0, 0, 0);
  yellowGhost = new ghost(819, 367, 255, 165, 0, 2);

}

function draw() {
  background(0);
  field();
  user.move(2);
  user.display();
  redGhost.display();
  redGhost.move();
  yellowGhost.display();
  yellowGhost.move();
  console.log(redGhost.goalX, redGhost.goalY);
  if(user.x >= 1133){
    user.x = 515;
  }
  if(user.x <= 509){
    user.x = 1133;
  }
    redGhost.goalX = user.x;
    redGhost.goalY = user.y;
    yellowGhost.goalX = user.x;
    yellowGhost.goalY = user.y;

}
function field(){
  push();
  translate(500, 100);
  scale(3);
  image(img, 0, 0);
  pop();
}
