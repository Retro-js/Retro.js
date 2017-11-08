function field(){
	push();
	noStroke();
	fill( 255 );
	rect( (window.innerWidth/2) - 250, 0, 10, 500);
	rect( (window.innerWidth/2) - 250, 0, 500, 10);
	rect( (window.innerWidth/2) + 250 - 10, 0, 10, 500);
	rect( (window.innerWidth/2) - 250, 500-10, 500, 10);
	pop();
}

function scores(){
	push();
	textFont( computer_font );
	if( (window.innerWidth/2) - 250 > ("Menú".length)*40 + 100 ){
		fill( 'white' );
		rect( (window.innerWidth/2) + 250 + 20, 0, scl, scl );
		text( "= " + score, (window.innerWidth/2) + 250 + 40, 8 );
		fill( 'red' );
		rect( (window.innerWidth/2) + 250 + 20, 20, scl, scl );
		text( "= " + xscore, (window.innerWidth/2) + 250 + 40, 28 );
	}
	pop();
}

function randomInterval( max, min ){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function againScreen(){
	push();
	textFont( computer_font );
	textAlign( CENTER );
	fill( 'white' );
	if( (window.innerWidth/2) - 250 > ("Menú".length)*40 + 100 ){
		textSize( 50 );
		text( "JUEGO \nTERMINADO", (window.innerWidth/2), 100 );
		textSize( 20 );
		text( "Tu puntaje fue de " + score, (window.innerWidth/2), 200 );
	}
	pop();
}

function resetSnake(){
	snk.total = 0;
	snk.tail = [];
	snk.x = 100 + (window.innerWidth/2) - 250;
	snk.x-= snk.x%scl;
	snk.y = 100;
	snk.dir( 1 );
	score = 0;
	xscore = 0;
	game_over = false;
}

//------------------------------------------------------------------------------

function mousePressed() {
	if ( menu_but.isMouseOn )
		window.location = menu_but.url;
	else if ( again_but.isMouseOn && game_over )
		resetSnake();
}

function keyPressed() {
	if (keyCode === UP_ARROW && snk.getDir()!==0 )
		snk.dir( 2 );
	else if (keyCode === DOWN_ARROW && snk.getDir()!==2 )
		snk.dir( 0 );
	else if (keyCode === RIGHT_ARROW && snk.getDir()!==3 )
		snk.dir( 1 );
	else if (keyCode === LEFT_ARROW && snk.getDir()!==1 )
		snk.dir( 3 );
}
