function mousePressed() {
	for( let i=0; i<3; i++ ){
		if ( buttons[i].isMouseOn )
			window.location = buttons[i].url;
	}
}