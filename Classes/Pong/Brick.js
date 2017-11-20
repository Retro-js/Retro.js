class Brick {
  constructor( x, y, t ) {
    this.x = x;
    this.y = y;
    this.type = t;
    this.colors = [color(230,230,0),color(0,230,0),color(230,115,0),color(230,0,0)];
    this.color = this.colors[t];
    this.show = true;
  }
  draw(){
    if( this.show ){
      push();
      rectMode( CORNER );
      fill( this.color );
      rect( this.x, this.y, 70, 18);
      pop();
    }
  }
  delete(){
    this.show = false;
    this.x = -40;
    this.y = -40;
  }
}
