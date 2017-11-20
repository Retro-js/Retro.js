class Pong {
    constructor( left ) {
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;
        if( left )
            this.x = (width/2)-280;
        else
            this.x = width/2 + 280;
    }
    update() {
        this.y += this.ychange;
        this.y = constrain(this.y, this.h/2, height-this.h/2);
    }
    move(steps) {
        this.ychange = steps;
    }
    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}

class HorizontalBar extends Pong{
  constructor(){
    super( true );
    this.y = height - 40;
    this.x = width / 2;
  }
  update() {
    this.x += this.ychange;
    this.x = constrain( this.x, (width/2)-380, (width/2)+280 );
  }
  show() {
      fill(255);
      rectMode( CORNER );
      rect(this.x, this.y, this.h, this.w);
  }
}
