let score = 0;

function setup() {
    createCanvas(500, 500);

    ball = new Ball();
    pong = new Pong();
}

function draw() {
    background(0);
    
    ball.hitPong(pong);

    pong.show();
    pong.update();
    
    ball.update();
    ball.edges();
    ball.show();
    
    fill(255);
    textSize(32);
    text(score, 32, 40);

}


function keyReleased() {
    pong.move(0);
}

function keyPressed() {
    console.log(key);
    if (key == 'W') {
        pong.move(-10);
    } else if (key == 'S') {
        pong.move(10);
    }
  }  