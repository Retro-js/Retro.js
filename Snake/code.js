var canvas,
    snk,
    scl = 10,
    food,
    exfd,
    score = 0,
    xscore = 0, //ExtraFood
    crafts,
    menu_but,
    again_but,
    game_over = false;

function setup() {
  if( (window.innerWidth/2) - 250 > ("Menú".length)*40 + 100 ){
    canvas = createCanvas( window.innerWidth-20, 500);
    let _x = ( (window.innerWidth/2) - 250 - ("Menú".length)*40 + 100 )/2;
    menu_but = new Button( "Menú", 250, 0, "../index/index.html", _x );
    again_but = new Button( "De nuevo", 400, 2, "resetSnake", (window.innerWidth/2) );
  } else{
    canvas = createCanvas( window.innerWidth-20, 700);
    menu_but = new Button( "Menú", 600, 0, "../index/index.html" );
  }
  canvas.parent( 'p5-sketch' );
  snk  = new Snake();
  food = new Food();
  exfd = new ExtraFood();
  food.changePosition();
  frameRate(15);
  crafts = [];
	crafts[0] = new Craft( "../assets/menu/galaga_craft.png",     createVector( 0.15, 0.15 ), true );
	crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ),       false );
}

function draw() {
	background( 'black' );
  field();
	scores();
  if( !game_over ){
    snk.eat( food );
  	snk.death();
  	snk.update();
  	snk.draw();
  	food.draw();
  } else{
    againScreen()
    again_but.draw();
  }
  menu_but.draw();
  if ( menu_but.isMouseOn ) {
    crafts[0].moveTo( menu_but );
  	crafts[1].moveTo( menu_but );
  } else if ( again_but.isMouseOn && game_over ) {
    crafts[0].moveTo( again_but );
  	crafts[1].moveTo( again_but );
  }
  if ( (score%10 == 0) && score>1 ) {
    exfd.draw();
    snk.eat( exfd );
  }
}
