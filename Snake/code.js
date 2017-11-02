var canvas,
    snk,
    scl = 10,
    food,
    crafts,
    button;


function setup() {
  if( (window.innerWidth/2) - 250 > ("Menú".length)*40 + 100 ){
    button = new Button( "Menú", 250, 0, "../index/index.html", ( (window.innerWidth/2) - 250 - ("Menú".length)*40 + 100 )/2 );
    canvas = createCanvas( window.innerWidth-20, 500);
  } else{
    button = new Button( "Menú", 600, 0, "../index/index.html" );
    canvas = createCanvas( window.innerWidth-20, 700);
  }
  canvas.parent( 'p5-sketch' );
  snk = new Snake();
  food = new Food();
  food.changePosition();
  frameRate(15);

  crafts = [];
	crafts[0] = new Craft( "../assets/menu/galaga_craft.png", createVector( 0.15, 0.15 ), true );
	crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ), false );
}

function draw() {
	background( 'black' );
	field();
	snk.eat(food);
	snk.death();
	snk.update();
	snk.draw();
	food.draw();
  button.draw();
  if ( button.isMouseOn ) {
    crafts[0].moveTo( button );
  	crafts[1].moveTo( button );
  }
}
