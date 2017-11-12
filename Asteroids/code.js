var ship;
var asteroids = []; 

function setup() {
  createCanvas(500, 500);
  ship = new Ship();
   for (var i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}
function keyReleased() {
	ship.setRotation(0);
	ship.boosting(false);
}
function keyPressed(){
	console.log(key);
	if(key == 'D'){
		ship.setRotation(0.1);
	
	}
	else if (key == 'A') {
		ship.setRotation(-0.1);
	}
	else if (key == 'W'){
		ship.boosting(true);
	}

}
function draw() {
	background(0);
	ship.render();
	ship.edges();
	ship.turn();
	ship.update();

	for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
}

}