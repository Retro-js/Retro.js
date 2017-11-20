class Ball {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = 12;
        this.sounds = [ loadSound('../assets/Pong/bar.mp3'), loadSound('../assets/Pong/point.mp3'), loadSound('../assets/Pong/wall.mp3') ];
        this.sounds[0].setVolume(0.5);
        this.sounds[1].setVolume(0.5);
        this.sounds[2].setVolume(0.5);
        this.reset();
    }
    hitPongLeft(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x - this.r < p.x + p.w/2) {
            if (this.x > p.x) {
                let diff = this.y - (p.y - p.h/2);
                let rad = radians(45);
                let angle = map(diff, 0, p.h, -rad, rad);
                this.xspeed = 7 * cos(angle);
                this.yspeed = 7 * sin(angle);
                this.x = p.x + p.w/2 + this.r;
                this.sounds[0].play();
            }
        }
    }
    hitPongRight(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x + this.r > p.x - p.w/2) {
            if (this.x < p.x) {
                let diff = this.y - (p.y - p.h/2);
                let angle = map(diff, 0, p.h, radians(225), radians(135));
                this.xspeed = 7 * cos(angle);
                this.yspeed = 7 * sin(angle);
                this.x = p.x - p.w/2 - this.r;
                this.sounds[0].play();
            }
        }
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    reset() {
        this.x = width/2;
        this.y = height - 50;
        let angle = random( -PI/4, PI/4 );
        this.xspeed = 7 * Math.cos(angle);
        this.yspeed = 7 * Math.sin(angle);
        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
    }
    edges() {
        if (this.y < 10 || this.y > height-10) {
            this.yspeed *= -1;
            this.sounds[2].play();
        }
        if ( this.x - this.r > width/2 + 320 ) {
            leftscore++;
            this.reset();
            this.sounds[1].play();
        }
        if ( this.x + this.r < (width/2) - 320 ) {
            rightscore++;
            this.reset();
            this.sounds[1].play();
        }
    }
    show() {
        fill(255);
        ellipse(this.x, this.y, this.r*2);
    }
}
class BallBO extends Ball{
  constructor(){
    super();
  }
  hitBar( b ){
    if( this.x > b.x && this.x < b.x+(b.h) ){
      if( this.y+this.r > b.y ){
        let diff = this.x - (b.x);
        let angle = map(diff, 0, b.h, radians(200), radians(340));
        this.xspeed = 7 * cos(angle);
        this.yspeed = 7 * sin(angle);
      }
    }
  }
  edges() {
      if(this.y > height){
        this.reset();
      }
      if (this.y < 0) {
        this.yspeed *= -1;
      }
      if ( this.x - this.r > width/2 + 330 || this.x + this.r < (width/2) - 330 ) {
        this.xspeed *= -1;
      }
  }
  reset() {
      this.x = (width/2)+10;
      this.y = height - 50;
      let angle = random( radians(200), radians(340));
      this.xspeed = 7 * Math.cos(angle);
      this.yspeed = 7 * Math.sin(angle);
      if (random(1) < 0.5) {
          this.xspeed *= -1;
      }
  }
  show() {
      fill(255);
      ellipseMode( CENTER );
      ellipse(this.x, this.y, this.r);
  }
}
