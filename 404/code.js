var canvas,
    text_size,
    button,
    crafts;

function setup() {
	frameRate( 50 );
	canvas = createCanvas( window.innerWidth , window.innerHeight );
	canvas.parent( 'p5-sketch' );
	button = new Button( "Volver al menú", 100, 0, "../index/index.html" );

	crafts = [];
	crafts[0] = new Craft( "../assets/menu/galaga_craft.png", createVector( 0.15, 0.15 ), true );
	crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ), false );
}

function draw() {
	background( 'black' );
	button.draw();
  if ( button.isMouseOn ) {
    crafts[0].moveTo( button );
  	crafts[1].moveTo( button );
  }
}
