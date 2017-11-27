
var user;
var img;
var redGhost;
var yellowGhost;
var blueGhost;
var pinkGhost;
var puntuation;
var buff;
var myFont;
var lives;
var colition;
var colitionRedGhost;
var colitionYellowGhost;
var colitionBlueGhost;
var colitionPinkGhost;
var cookieI;
var cookieII;
var cookieIII;
var cookieIV;
var collideCookie;
var collideI;
var collideII;
var collideIII;
var collideIV;
var time;
var seconds;
var minutes;
var counter;
var cookieA;
var cookieB;
var cookieC;
var cookieD;
function preload() {
  img = loadImage("fondo.jpg");
  myFont = loadFont('PAC-FONT.TTF');
}
function setup() {
  createCanvas(1400, 1000);
  noStroke();
  user = new pacman(822, 500);
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
  time = (minutes*60) + seconds;
  minutes = minute();
  seconds = second();
  push();
  textSize(32);
  textFont(myFont);
  background(0);
  field();
  text("SCORE ", 520, 860);
  pop();
  textSize(34);
  text("= ", 680, 860);
  text(user.puntuation, 710, 860);
  user.move(4);
  user.display();
  redGhost.display();
  redGhost.move();
  blueGhost.display();
  blueGhost.move();
  yellowGhost.display();
  yellowGhost.move();
  pinkGhost.display();
  pinkGhost.move();
  cookieI.display();
  cookieII.display();
  cookieIII.display();
  cookieIV.display();
  if(cookieA==0){
  collideI = collideCircleCircle(user.x, user.y, 35, cookieI.x, cookieI.y, 25);
}

  if(collideI){
    cookieI.state=false;
  }
    if(cookieB==0){
  collideII = collideCircleCircle(user.x, user.y, 35, cookieII.x, cookieII.y, 25);
}
  if(collideII){
    cookieII.state=false;
  }
    if(cookieC==0){
  collideIII = collideCircleCircle(user.x, user.y, 35, cookieIII.x, cookieIII.y, 25);
}
  if(collideIII){
    cookieIII.state=false;
  }
    if(cookieD==0){
  collideIV = collideCircleCircle(user.x, user.y, 35, cookieIV.x, cookieIV.y, 25);
}
  if(collideIV){
    cookieIV.state=false;
  }
  if(collideI||collideII||collideIII||collideIV){
    collideCookie = true;
  }
  if(collideCookie){
    redGhost.state=false;
    blueGhost.state=false;
    yellowGhost.state=false;
    pinkGhost.state=false;
    if(counter==0){
      counter = time;
    }
  }
  if(!cookieI.state){
    cookieA+=1;
  }
  if(!cookieII.state){
    cookieB+=1;
  }
  if(!cookieIII.state){
    cookieC+=1;
  }
  if(!cookieIV.state){
    cookieD+=1;
  }
  if(!redGhost.home){
    redGhost.goalX = user.x;
    redGhost.goalY = user.y;
    redGhost.escape = false;
  }
  else{
    redGhost.escape = true;
    redGhost.goalX = 819;
    redGhost.goalY = 367;
  }
  if(!yellowGhost.home){
    yellowGhost.escape = false;
    yellowGhost.goalX = user.x;
    yellowGhost.goalY = user.y;
  }
  else{
    yellowGhost.escape = true;
    yellowGhost.goalX = 819;
    yellowGhost.goalY = 367;
  }
  if(!blueGhost.home){
    blueGhost.escape = false;
    blueGhost.goalX = user.x;
    blueGhost.goalY = user.y;
  }
  else{
    blueGhost.escape = true;
    blueGhost.goalX = 819;
    blueGhost.goalY = 367;
  }
  if(!pinkGhost.home){
    pinkGhost.escape = false;
    pinkGhost.goalX = user.x;
    pinkGhost.goalY = user.y;
  }
  else{
    pinkGhost.escape = true;
    pinkGhost.goalX = 819;
    pinkGhost.goalY = 367;
  }
  if(time-counter==10){
    redGhost.home = false;
    yellowGhost.home = false;
    blueGhost.home = false;
    pinkGhost.home = false;

    redGhost.state=true;
    blueGhost.state=true;
    yellowGhost.state=true;
    pinkGhost.state=true;
    collideCookie = false;
    counter = 0;
  }
  console.log(cookieA);
  colitionRedGhost = collideCircleCircle(user.x, user.y, 35, redGhost.x, redGhost.y, 35);
  if(collideCookie&&colitionRedGhost){
    redGhost.home = true;
  }
  colitionYellowGhost = collideCircleCircle(user.x, user.y, 35, yellowGhost.x, yellowGhost.y, 35);
  if(collideCookie&&colitionYellowGhost){
    yellowGhost.home = true;
  }
  colitionBlueGhost = collideCircleCircle(user.x, user.y, 35, blueGhost.x, blueGhost.y, 35);
  if(collideCookie&&colitionBlueGhost){
    blueGhost.home = true;
  }
  colitionPinkGhost = collideCircleCircle(user.x, user.y, 35, pinkGhost.x, pinkGhost.y, 35);
  if(collideCookie&&colitionPinkGhost){
    pinkGhost.home = true;
  }
  if((colitionRedGhost||colitionYellowGhost)||(colitionBlueGhost||colitionPinkGhost)){
    colition=true;
  }
  if(colition){
    if(redGhost.state){
    lives -=1;
    user.x = 822;
    user.y = 500;
    redGhost.x = 819;
    redGhost.y = 367;
    redGhost.m = 0;
    yellowGhost.x = 819;
    yellowGhost.y = 367;
    yellowGhost.m = 2;
    blueGhost.x = 819;
    blueGhost.y = 367;
    blueGhost.m = 2;
    }
  }
  colition = false;
  push();
  textSize(32);
  textFont(myFont);
  text("LIVES ", 850, 860);
  if(lives==3){
    fill(255, 255, 0);
    ellipse(1000, 850, 30, 30);
    ellipse(1050, 850, 30, 30);
    ellipse(1100, 850, 30, 30);
  }
  if(lives==2){
    fill(255, 255, 0);
    ellipse(1000, 850, 30, 30);
    ellipse(1050, 850, 30, 30);
  }
  if(lives==1){
    fill(255, 255, 0);
    ellipse(1000, 850, 30, 30);
  }
  pop();
  if(user.puntuation >= 173){
    push();
    textFont(myFont);
    textSize(32);
    text("YOU HAVE WON", 760, 512);
    pop();
  }

collideI=false;
collideII=false;
collideIII=false;
collideIV=false;
}
function field(){
  push();
  translate(500, 100);
  scale(3);
  image(img, 0, 0);
  pop();
}
