function mousePressed() {
	for( let i=0; i<buttons.length; i++ ){
		if ( buttons[i].isMouseOn )
			window.location = buttons[i].url;
	}
}
