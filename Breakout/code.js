var canvas,
    bar,
    ball,
    score;

function setup() {
  canvas = createCanvas( window.innerWidth - 100, 600 );
  canvas.position( (window.innerWidth - width)/2 );
  noStroke();

  bar = new HorizontalBar();
  ball = new BallBO();
}
function draw() {
  background(0);
  bar.update();
  bar.show();
  rect((width/2)-380,height/2,20,height);
  rect((width/2)+380,height/2,20,height);

  ball.update();
  ball.edges();
  ball.show();
  ball.hitBar( bar );
}

// -----------------------------------------------------------------------------

function keyReleased() {
    bar.move(0);
}

function keyPressed() {
    if (key == 'A') {
        bar.move(-10);
    } else if (key == 'D') {
        bar.move(10);
    }
}
