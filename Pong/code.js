leftscore = 0;
rightscore = 0;

function setup() {
    createCanvas(600, 400);
    noStroke();
    ball = new Ball();
    leftpong = new Pong(true);
    rightpong = new Pong(false);
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

    fill(255);
    for(i= 0; i< 22; i++) {
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
