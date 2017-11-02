function field(){
	push();
	noStroke();
	fill( 255 );
	rect( (window.innerWidth/2) - 250, 0, 3, 500);
	rect( (window.innerWidth/2) - 250, 0, 500, 3);

	rect( (window.innerWidth/2) + 250 - 3, 0, 3, 500);
	rect( (window.innerWidth/2) - 250, 500-3, 500, 3);
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

function randomInterval( max, min ){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function mousePressed() {
	if ( button.isMouseOn )
			window.location = button.url;
}
