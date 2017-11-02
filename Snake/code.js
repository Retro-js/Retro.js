var canvas,
    snk,
    scl = 10,
    food;


function setup() {
  canvas = createCanvas( 500, 500);
  canvas.parent( 'p5-sketch' );

  let x = (windowWidth - width) / 2;
  canvas.position( x, 200 );
  snk = new Snake();
  food = new Food();
  food.changePosition();
  frameRate(15);
}

function draw() {
	background( 'black' );
	field();
	snk.eat(food);
	snk.death();
	snk.update();
	snk.draw();
	food.draw();
}
