var snk;
var scl = 10;
var food;

function setup() {
  createCanvas(500, 500);
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