var canvas,
    computer_font,
    text_size,
    buttons;

function preload(){
	computer_font = loadFont( '../assets/computer_font.ttf' );
}

function setup() {
	canvas = createCanvas( window.innerWidth , window.innerHeight );
	canvas.parent( 'p5-sketch' );
	buttons = [];
	buttons[0] = new Button( "Snake", 100, 0, "/Snake/index.html" );
	buttons[1] = new Button( "Space Invaders", 250, 1, "/Snake/index.html" );
	buttons[2] = new Button( "Tetris", 400, 2, "/Snake/index.html" );
}

function draw() {
	background( 'black' );
	for ( let button in buttons )
		button.draw();
}