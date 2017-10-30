class Food extends Snake{
	changePosition() {
		let x = random( width-20 );
		let y = random( height-20 );
		this.x = x - x%scl + 10;
		this.y = y - y%scl + 10;
	}

	draw(){
		fill( 255 );
		noStroke();
		rect(this.x, this.y, scl, scl);
	}
}