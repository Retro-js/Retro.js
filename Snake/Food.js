class Food extends Snake{
	constructor(){
		super();
		this.type = 1;
	}

	changePosition() {
		let x = randomInterval( 10, 490 ) + (window.innerWidth/2) - 250;
		let y = randomInterval( 10, 490 );
		this.x = x - x%scl;
		this.y = y - y%scl;
	}

	draw(){
		fill( 255 );
		noStroke();
		rect(this.x, this.y, scl, scl);
	}
}
