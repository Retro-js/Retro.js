function preload() {
  img = loadImage("fondo.jpg");
  start = loadImage("start.jpg")
  myFont = loadFont('PAC-FONT.TTF');
}
function setup() {
  createCanvas(1400, 1000);
  noStroke();
  startBool = false;
  again = false;
  user = new pacman(822, 630);
  redGhost = new ghost(819, 367, 255, 0, 0, 0, true, false, false);
  yellowGhost = new ghost(819, 367, 255, 165, 0, 2, true, false, false);
  blueGhost = new ghost(819, 367, 0, 0, 255, 3, true, false, false);
  pinkGhost = new ghost(819, 367, 255, 0, 255, 1, true, false, false);
  lives = 3;
  cookieI = new cookies(548, 202, true);
  cookieII = new cookies(1096, 202, true);
  cookieIII = new cookies(544, 599, true);
  cookieIV = new cookies(1096, 599, true);
  collideI = false;
  collideII = false;
  collideIII = false;
  collideIV = false;
  cookieA = 0;
  cookieB = 0;
  cookieC = 0;
  cookieD = 0;
  counter = 0;
  collideCookie= false;
}

function draw() {
  if(!startBool||again){
    push();
    translate(500, 100);
    scale(3);
    image(start, 0, 0);
    pop();
    push();
    fill(0);
    rect(770, 650, 350, 70);
    pop();
    push();
    textSize(40);
    textFont(myFont);
    fill(255, 255, 0);
    text("NEW GAME", 785, 695)
    pop();


    if(mouseIsPressed){
      startBool = collidePointRect(mouseX, mouseY, 770, 650, 350, 70);
      user.puntuation=0;
      again=false;
      lives=3;
    }
    pop();
  }
  else{
  if(lives!=0){
  game();
}
else{
  background(0);
  push();
  textSize(50);
  textFont(myFont);
  text("GAME OVER", 700, 500);
  pop();
  push();
  fill(0);
  rect(685, 645, 250, 70);
  if(mouseIsPressed){
    again = collidePointRect(mouseX, mouseY, 685, 645, 250, 70);
  }
  pop();
  push();
  fill(255, 255, 0);
  textFont(myFont);
  text("TRY AGAIN", 700, 700);
  pop();

}
}
}
function field(){
  push();
  translate(500, 100);
  scale(3);
  image(img, 0, 0);
  pop();
}
