function mousePressed() {
	for( let button in buttons ){
		if ( button.isMouseOn )
			window.location = button.url;
	}
}