class Snake{
	constructor(){
		this.x = 100;
		this.y = 100;
		this.xspeed = 1;
		this.yspeed = 0;
		this.total = 0;
		this.tail = [];
		this.direction = 1;
	}
	eat( fd ) {
		var d = dist(this.x, this.y, fd.x, fd.y);
		if (d < 1) {
			this.total ++;
			fd.changePosition();
		}
	}

	dir( n ) {
		switch( n ){
			case 0:
				this.xspeed = 0;
				this.yspeed = 1;
				break;
			case 1:
				this.xspeed = 1;
				this.yspeed = 0;
				break;
			case 2:
				this.xspeed = 0;
				this.yspeed = -1;
				break;
			case 3:
				this.xspeed = -1;
				this.yspeed = 0;
				break;
		}
		this.direction = n;
	}
	getDir(){
		return this.direction;
	}

	death() {
		if( this.x < 10 || this.x >= 490 || this.y < 10 || this.y >= 490 ){
			this.total = 0;
			this.tail = [];
			this.x = 100;
			this.y = 100;
			this.dir( 1 );
		}
		if( this.tail[0] !== null ){
			for (var i = 0; i < this.tail.length; i++) {
				var pos = this.tail[i];
				var d = dist(this.x, this.y, pos.x, pos.y);
				if (d < 1){
					this.total = 0;
					this.tail = [];
					this.x = 100;
					this.y = 100;
					this.dir( 1 );
				}
			}
		}
	}

	update() {
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		if (this.total >= 1) {
			this.tail[this.total - 1] = createVector(this.x, this.y);
		}
		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;
		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	draw() {
		fill( 255 );
		noStroke();
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}
}