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

function scoresPoints(){
	push();
	fill( 'white' );
	if( (window.innerWidth/2) - 250 > ("Menú".length)*40 + 100 ){
		rect( (window.innerWidth/2) + 250 + 20, 250, scl, scl );
		text( "= " + score, (window.innerWidth/2) + 250 + 50, 250);
		fill( 'red' );
		rect( (window.innerWidth/2) + 250 + 20, 350, scl, scl );
		text( "= " + xscore, (window.innerWidth/2) + 250 + 50, 350 );
	}
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
