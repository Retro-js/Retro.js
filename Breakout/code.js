var canvas,
    bar;

function setup() {
  canvas = createCanvas( window.innerWidth - 100, 600 );
  canvas.position( (window.innerWidth - width)/2 );
  noStroke();

  bar = new HorizontalBar();
}
function draw() {
  background(0);
  bar.update();
  bar.show();
  console.log( width );
  console.log( bar.x );
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
