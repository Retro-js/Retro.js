var leftscore = 0;
var rightscore = 0;
var ball;
var leftpong;
var rightpong;
var canvas;
var menu_but;
var crafts;

function setup() {
    canvas = createCanvas( window.innerWidth - 100, 400 );
    canvas.position( (window.innerWidth - width)/2 );
    noStroke();
    ball      = new Ball();
    leftpong  = new Pong( true );
    rightpong = new Pong( false );
    let _x = ( (window.innerWidth/2) - 250 - ("Menú".length)*40 + 10 )/2;
    menu_but  = new Button( "Menú", 200, 0, "../index/index.html", _x, 150 );
    crafts    = [];
    crafts[0] = new Craft( "../assets/menu/galaga_craft.png",     createVector( 0.15, 0.15 ), true );
    crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ),       false );
}

function draw() {
    background(0);

    ball.hitPongLeft(leftpong);
    ball.hitPongRight(rightpong);

    leftpong.show();
    rightpong.show();
    leftpong.update();
    rightpong.update();

    ball.update();
    ball.edges();
    ball.show();

    menu_but.draw();
    if ( menu_but.isMouseOn ) {
      crafts[0].moveTo( menu_but );
    	crafts[1].moveTo( menu_but );
    }

    fill(255);
    for( let i= 0; i< 22; i++) {
    rect((width/2)+5, i*20, 10, 10);
    }
    textFont( computer_font );
    textAlign( RIGHT );
    textSize(34);
    text(leftscore, (width/2), 40);
    textAlign( LEFT );
    text(rightscore, (width/2)+10, 40);
}


function keyReleased() {
    leftpong.move(0);
    rightpong.move(0);
}

function keyPressed() {
    console.log(key);
    if (key == 'W') {
        leftpong.move(-10);
    } else if (key == 'S') {
        leftpong.move(10);
    }

    if (key == 'I') {
        rightpong.move(-10);
    } else if (key == 'K') {
        rightpong.move(10);
    }
}

function mousePressed() {
	if ( menu_but.isMouseOn )
		window.location = menu_but.url;
}
