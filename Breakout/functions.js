function keyReleased() {
    bar.move(0);
}

function keyPressed() {
    if (key == 'A' || keyCode == LEFT_ARROW ) {
        bar.move(-10);
    } else if (key == 'D' || keyCode == RIGHT_ARROW ) {
        bar.move(10);
    }
}

// -----------------------------------------------------------------------------

function collide( i, j ) {
  if( ball.x > bricks[i][j].x - 37 &&
      ball.x < bricks[i][j].x + 37 &&
      dist( ball.y - ball.r, 0, bricks[i][j].y + 10, 0 )< 1  ){
    ball.yspeed *= -1;
    bricks[i][j].delete();
    scoreUpdate( bricks[i][j] );
  } else if( ball.x > bricks[i][j].x - 37 &&
      ball.x < bricks[i][j].x + 37 &&
      dist( ball.y + ball.r, 0, bricks[i][j].y - 10, 0 )< 1 ){
    ball.yspeed *= -1;
    bricks[i][j].delete();
    scoreUpdate( bricks[i][j] );
  } else if( ball.y > bricks[i][j].y - 10 &&
      ball.y < bricks[i][j].y + 10 &&
      dist( ball.x - ball.r, 0, bricks[i][j].y + 37, 0 )< 1 ){
    ball.xspeed *= -1;
    bricks[i][j].delete();
    scoreUpdate( bricks[i][j] );
  } else if( ball.y > bricks[i][j].y - 10 &&
      ball.y < bricks[i][j].y + 10 &&
      dist( ball.x - ball.r, 0, bricks[i][j].y + 37, 0 )< 1 ){
    ball.xspeed *= -1;
    bricks[i][j].delete();
    scoreUpdate( bricks[i][j] );
  }
}

function scoreUpdate( brick ) {
  switch ( brick.type ) {
    case 0:
      score += 1;
      break;
    case 1:
      score += 3;
      break;
    case 2:
      score += 5;
      break;
    case 3:
      score += 7;
      break;
    default:
      score += 1;
  }
}
