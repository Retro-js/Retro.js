var computer_font;
function preload(){
	computer_font = loadFont( '../assets/computer_font.ttf' );
}

class Button{
	constructor( _content, _y, _t, _url, _x ){
		this.content = _content;
		if( _x == undefined )
			this.x = window.innerWidth/2;
		else
			this.x = _x;
		this.y = _y;
		this.text_size = 40;
		this.w = (this.content.length)*this.text_size + 100;
		this.h = this.text_size + 50;
		this.type = _t;
		this.isMouseOn = false;
		this.url = _url;

		this.colors = [];
		for (var i = 0; i < 3; i++) {
			this.colors[i] = new Array( 3 );
		}
		//red 			   isMouseOn  !isMouseOn border
		this.colors[0] = [ '#ff0000', '#ff4d4d', '#b30000'];
		//green
		this.colors[1] = [ '#00ff00', '#4dff4d', '#00b300'];
		//blue
		this.colors[2] = [ '#0000ff', '#4d4dff', '#0000b3'];

		this.color = this.colors[ this.type ];
	}

	draw(){
		this.isMouseOn = mouseX > (this.x - this.w/2) && mouseX < (this.x + this.w/2) &&
		                 mouseY > (this.y - this.h/2) && mouseY < (this.y + this.h/2);
		push();
		noStroke();
		if ( this.isMouseOn )
			fill( this.color[0] );
		else
			fill( this.color[1] );
		rectMode( CENTER );
		rect( this.x, this.y, this.w, this.h );
		fill( 'white' );
		textAlign( CENTER, CENTER);
		textFont( computer_font );
		textSize( this.text_size );
		text( this.content, this.x, this.y );
		fill( this.color[2] );
		if ( this.isMouseOn ){
			rect( this.x, this.y + ( this.h )/2, this.w, 11 );
			rect( this.x -5 + ( this.w )/2, this.y, 11, this.h );
		}
		else{
			rect( this.x, this.y + ( this.h )/2, this.w, 10 );
			rect( this.x -5 + ( this.w )/2, this.y, 10, this.h );
		}
		pop();
	}
}
