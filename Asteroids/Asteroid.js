class Asteroid {
	constructor(p, ra){
		if(p) {
		this.pos = p.copy();
		}
		else {
		this.pos = createVector(random(width), random(height));
		}
		if(ra) {
		this.r = ra*0.5;
		}
		else {
		this.r= random(15, 35);
		}
		this.vel = p5.Vector.random2D();
		this.score = int(this.r * 10);
		this.total = floor(random(5, 15));
		this.offset = [];
		for (var i = 0; i< this.total; i++) {
			this.offset[i]= random(-this.r, this.r);
		}

	}


	update(){
		this.pos.add(this.vel);
	}

	render(){

		push();
		noFill();
		stroke(255);
		translate(this.pos.x, this.pos.y);
		beginShape();
		for(var i=0; i<this.total; i++){
			var angle = map(i, 0, this.total, 0, TWO_PI);
			var x = (this.r + this.offset[i])*cos(angle);
			var y = (this.r + this.offset[i])*sin(angle);
			vertex(x,y);
		}
		endShape(CLOSE);
		pop();

	}
	edges(){
		if(this.pos.x > width + this.r){
			this.pos.x = -this.r;
		} else if (this.pos.x < -this.r){
			this.pos.x = width + this.r;
		}
		if(this.pos.y > height + this.r){
			this.pos.y = -this.r;
		} else if (this.pos.y < -this.r){
			this.pos.y = height + this.r;
		}
	}


	split(){
	var newA = [];
	newA[0] = new Asteroid(this.pos, this.r);
	newA[1] = new Asteroid(this.pos, this.r);
	return newA;	
	}
	










}