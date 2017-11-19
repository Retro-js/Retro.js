var canvas,
    bar,
    ball,
    bricks,
    score = 5;

function setup() {
  canvas = createCanvas( window.innerWidth - 100, 600 );
  canvas.position( (window.innerWidth - width)/2 );
  noStroke();

  bricks = [];

  bricks[0] = [];
  bricks[1] = [];
  bricks[2] = [];
  bricks[3] = [];
  bricks[4] = [];
  bricks[5] = [];
  bricks[6] = [];
  bricks[7] = [];

  for( let i=0; i<720; i+=73 ){
    bricks[0][i/73] = new Brick( ((width/2)-330)+i , 10,  3 );
    bricks[1][i/73] = new Brick( ((width/2)-330)+i , 30, 3 );
    bricks[2][i/73] = new Brick( ((width/2)-330)+i , 50, 2 );
    bricks[3][i/73] = new Brick( ((width/2)-330)+i , 70, 2 );
    bricks[4][i/73] = new Brick( ((width/2)-330)+i , 90, 1 );
    bricks[5][i/73] = new Brick( ((width/2)-330)+i , 110, 1 );
    bricks[6][i/73] = new Brick( ((width/2)-330)+i , 130, 0 );
    bricks[7][i/73] = new Brick( ((width/2)-330)+i , 150, 0 );
  }

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

  for( let i = 0; i<8; i++ ){
    for( let j=0; j<10; j++ ){
      bricks[i][j].draw();
      collide( i, j );
    }
  }
}
