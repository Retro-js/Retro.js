class Snake{
	constructor(){
		this.x = 100 + (window.innerWidth/2) - 250;
		this.x-= this.x%scl;
		this.y = 100;
		this.xspeed = 1;
		this.yspeed = 0;
		this.total = 0;
		this.tail = [];
		this.direction = 1;
		this.deaths = 0;
	}

	eat( fd ) {
		let d = dist(this.x, this.y, fd.x, fd.y);
		if (d < 1) {
			this.total ++;
			fd.changePosition();
			score +=  fd.type;
			xscore += ( fd.type===5 ) ? 1 : 0;
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
		if( this.tail[0] !== null ){
			for (var i = 0; i < this.tail.length; i++) {
				let pos = this.tail[i];
				let d = dist(this.x, this.y, pos.x, pos.y);
				if (d < 1){
					game_over = true;
					this.deaths++;
				}
			}
		}
	}

	update() {
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		if (this.total >= 1)
			this.tail[this.total - 1] = createVector(this.x, this.y);
		if( this.x > (window.innerWidth/2) + 250 -20 ){
			this.x = (window.innerWidth/2) - 250 ;
			this.x-= this.x%scl;
		}
		else if( this.x < (window.innerWidth/2) - 250 + 10 ){
			this.x = (window.innerWidth/2) + 250 - scl;
			this.x-= this.x%scl;
		}
		if( this.y < 0 )
			this.y = 490;
		else if( this.y > 500 )
			this.y = 0;
		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;
	}

	draw() {
		fill( 255 );
		noStroke();
		for (var i = 0; i < this.tail.length; i++)
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		rect(this.x, this.y, scl, scl);
	}
}
