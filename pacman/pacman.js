var w1;
var user;
var posXo;
var posYo;
var posXi;
var PosYi;
var heightI;
var widthI;
var hit;
function setup() {
  createCanvas(1200, 550);
  noStroke();
  w1 = new wall(10, 10, 118, 10);
  user = new pacman(500, 250);
}

function draw() {
  background(0);
  w1.display();
  user.display();
  user.move(7);
  posXo = user.getPosX();
  posYo = user.getPosY();
  posXi = w1.posX;
  posYi = w1.posY;
  heightI = w1.long;
  widthI = w1.width;
  hit = collideRectCircle(posXi-8, posYi-5, widthI, heightI, posXo,posYo, 55);
  console.log(hit);
}

function wall(x, y, j, k){
	this.posX = x;
	this.posY = y;
	this.width = j;
	this.long = k;
	
	this.display = function() {
		
		translate(this.posX, this.posY);
		fill(0, 0, 255);
    	rect(0, 0, this.width, this.long, 7);
    	fill(0);
    	rect(4, 4, this.width-8, this.long-8, 7);
    
  }
}
function pacman(xo, yo) {
	this.x=mouseX;
	this.y=mouseY;
	this.display = function() {
		fill(255, 255, 0);
		ellipse(this.x, this.y, 55, 55);
	}
	 this.move = function(s){
		if(keyIsPressed){
			if(key=='a'){
				this.x = this.x-s;
			}else{
				if(key=='s'){
				this.y = this.y+s;
				}else{
					if(key=='d'){
					this.x = this.x+s;
			}else{
			if(key=='w'){
				this.y = this.y-s;
						}
					}
				}
			}
		}
	}

	this.getPosX = function(){
		return this.x;
	}
	this.getPosY = function(){
		return this.y;
	}
	
}