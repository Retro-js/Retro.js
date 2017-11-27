var ship;
var asteroids = [];
var lasers = [];
var score = 0;
var lives = 3;
var shot;
var hit;
var gameover;
var myfont;

function preload() {

   shoot = loadSound('shoot.mp3');
   hit = loadSound('hit.mp3');
   gameover = loadSound('game-over.mp3');
   myfont = loadFont('ca.ttf');
}


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
		ship.loading(true);

	}
	else if (key == 'A') {
		ship.setRotation(-0.1);
		ship.loading(true);
	}
	else if (key == 'W'){
		ship.boosting(true);
		ship.loading(true);
	}
	else if(key == ' ' ){
	lasers.push(new Laser(ship.pos, ship.angle));
  shoot.setVolume(0.5);
	shoot.play();


	}
	else if(key == 'R' ){
	reset();

	}

}

function draw() {
	fill(255);
	background(0);
	if (lives == 0) {
  gameover.setVolume(0.5);
	gameover.play();
  textFont(myfont);
	textSize(30);
	text("GAME OVER", 150, 200);
	textSize(25);
	text("Puntaje:  ", 150, 250);
	text(score, 300, 250);
	textSize(18);
	fill(255, 100, 0);
	text("Presiona R para jugar de nuevo", 50, 350);
	noLoop();

	}
	else {
	textSize(18);
	text(score, 10, 30);


	fill(255, 0, 0);

	for(i=0; i<lives; i++) {
	push()
	translate(60+(i*20), 10);
	scale(0.5);
	beginShape();
	vertex(50, 15);
	bezierVertex(50, -5, 90, 5, 50, 40);
	vertex(50, 15);
	bezierVertex(50, -5, 10, 5, 50, 40);
	endShape(CLOSE);
	pop();
	}





	for (var i = 0; i < asteroids.length; i++) {
	if(ship.isLoading){
    if (ship.hit(asteroids[i])) {
    hit.setVolume(0.5);
    hit.play();
      lives--;
      ship.loading(false);
      break;
    }
	}
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

	for (var i = lasers.length-1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
     if (lasers[i].edges()) {
      lasers.splice(i, 1);
    } else {
    	for (var j = asteroids.length-1; j >= 0; j--) {
    		if(lasers[i].hit(asteroids[j])) {
    			if (asteroids[j].r > 15) {
    			asteroids = asteroids.concat(asteroids[j].split());
    			asteroids.push(new Asteroid());
				}
				score +=  asteroids[j].score;
				asteroids.splice(j, 1);

				lasers.splice(i,1);
				break;

    		}
    	}

	}
}

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
}

function reset(){
 score = 0;
lives = 3;

loop();
}
