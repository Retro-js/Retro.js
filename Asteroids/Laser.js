class Laser {
	constructor(p, a){
		this.pos = createVector(p.x, p.y);
		this.vel = p5.Vector.fromAngle(a);
		this.vel.mult(10);
		this.angle = a;

		

	}

	update(){
		this.pos.add(this.vel);

	}

	render(){
		push();
		stroke(255);
		translate(this.pos.x, this.pos.y)
		rotate(this.angle);
		line(0, 0, 10, 0);
		pop();

	}

	hit(asteroid){
		var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
		if(d < asteroid.r){
			return true;
		}
		else {
			return false;
		}

	}
	edges() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }

}