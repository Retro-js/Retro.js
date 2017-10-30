function field(){
	push();
	noStroke();
	fill( 255 );
	rect( 0, 0, 3, height);
	rect( 7, 0, 3, height);
	rect( 0, 0, width, 3);
	rect( 0, 7, width, 3);

	rect( width-10, 0, 3, height);
	rect( width-3, 0, 3, height);
	rect( 0, height-10, width, 3);
	rect( 0, height-3, width, 3);
	pop();
}

function keyPressed() {
	if (keyCode === UP_ARROW && snk.getDir()!==0 ) {
		snk.dir( 2 );
	} else if (keyCode === DOWN_ARROW && snk.getDir()!==2 ) {
		snk.dir( 0 );
	} else if (keyCode === RIGHT_ARROW && snk.getDir()!==3 ) {
		snk.dir( 1 );
	} else if (keyCode === LEFT_ARROW && snk.getDir()!==1 ) {
		snk.dir( 3 );
	}
}