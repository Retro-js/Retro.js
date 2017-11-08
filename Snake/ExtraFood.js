class ExtraFood extends Food{
  constructor(){
    super();
    this.type = 5;
  }

  draw(){
    fill( 255, 0, 0 );
		noStroke();
		rect(this.x, this.y, scl, scl);
  }
}
