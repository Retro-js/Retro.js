class Craft{
	constructor( _path, _scl, _rght ){
		this.path = _path;
		this.image = loadImage( this.path );
		this.scl = createVector( _scl.x, _scl.y );
		this.x = -100;
		this.y = -100;
		this.right = _rght;
	}
	moveTo( _but ){
		if ( this.right )
			this.x = (_but.x +20 + _but.w /2);
		else
			this.x = (_but.x -20- _but.w /2);
		this.y = _but.y;
		this.draw();
	}
	draw(){
		push();
		if ( this.right )
			translate( this.x, this.y + 20 );
		else
			translate( this.x, this.y - 20 );
		scale( this.scl.x, this.scl.y );
		rotate( this.right ? -PI/2 : PI/2 );
		image( this.image, 0, 0 );
		pop();
	}
}
