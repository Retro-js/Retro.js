var canvas,
    bar,
    ball,
    bricks,
    score = 0,
    menu_but,
    crafts;

function setup() {
  canvas = createCanvas( window.innerWidth - 100, 600 );
  canvas.position( (window.innerWidth - width)/2 );
  noStroke();
  let _x = ( (window.innerWidth/2) - 250 - ("Menú".length)*40 + 10 )/2;
  menu_but  = new Button( "Menú", 200, 0, "../index/index.html", _x, 150 );
  crafts    = [];
  crafts[0] = new Craft( "../assets/menu/galaga_craft.png",     createVector( 0.15, 0.15 ), true );
  crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ),       false );

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
    bricks[0][i/73] = new Brick( ((width/2)-363)+i , 10,  3 );
    bricks[1][i/73] = new Brick( ((width/2)-363)+i , 30, 3 );
    bricks[2][i/73] = new Brick( ((width/2)-363)+i , 50, 2 );
    bricks[3][i/73] = new Brick( ((width/2)-363)+i , 70, 2 );
    bricks[4][i/73] = new Brick( ((width/2)-363)+i , 90, 1 );
    bricks[5][i/73] = new Brick( ((width/2)-363)+i , 110, 1 );
    bricks[6][i/73] = new Brick( ((width/2)-363)+i , 130, 0 );
    bricks[7][i/73] = new Brick( ((width/2)-363)+i , 150, 0 );
  }

  bar = new HorizontalBar();
  ball = new BallBO();
}
function draw() {
  background(0);
  bar.update();
  bar.show();
  rectMode( CENTER );
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
  menu_but.draw();
  if ( menu_but.isMouseOn ) {
    crafts[0].moveTo( menu_but );
    crafts[1].moveTo( menu_but );
  }
}
function mousePressed() {
	if ( menu_but.isMouseOn )
		window.location = menu_but.url;
}
