class Ship {

	constructor(){
		this.pos = createVector(250, 250);
		this.r = 20;
		this.angle = 0;
		this.rotation = 0;
		this.vel = createVector(0,0);
		this.isBoost = false;

	}

	update(){
		if(this.isBoost){
			this.boost();
		}
		this.pos.add(this.vel);
		this.vel.mult(0.925);
	}

	boosting(b){
		this.isBoost = b;
	}

	boost(){
		var force = p5.Vector.fromAngle(this.angle);
		force.mult(0.5);
		this.vel.add(force);

	}

	render (){
		push();
		noFill();
		stroke(255);
		translate(this.pos.x, this.pos.y)
		rotate(this.angle + PI/ 2 );
		triangle(-this.r, this.r, this.r, this.r,0, -this.r); 
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

	setRotation(a) {
		this.rotation = a;
	}

	turn(){
		this.angle= this.angle + this.rotation;

	} 

}