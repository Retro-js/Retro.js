var w1;
var user;
var posXo;
var posYo;
function setup() {
  createCanvas(1200, 550);
  noStroke();
  w1 = new wall(10, 10, 1180, 10, 0);
  user = new pacman(500, 250);
}

function draw() {
  background(0);
  w1.display();
  user.display();
  user.move(7);
  posXo = user.givePosX;
  posYo = user.givePosY;
  console.log(posXo, posYo);
}

function wall(x, y, j, k, r){
	this.posX = x;
	this.posY = y;
	this.width = j;
	this.long = k;
	this.rot = r;
	
	this.display = function() {
		
		translate(this.posX, this.posY);
		rotate(radians(this.rot));
		fill(0, 0, 255);
    	rect(0, 0, this.width, this.long, 7);
    	fill(0);
    	rect(4, 4, this.width-8, this.long-8, 7);
    
  }
}
function pacman(xo, yo) {
	this.x=xo;
	this.y=yo;
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

	this.givePosX = function(){
		return this.x;
	}
	this.givePosY = function(){
		return this.y;
	}
	
}