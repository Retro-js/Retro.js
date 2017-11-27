class Enemigos {
  constructor(x,y,t){
    this.x = x;
    this.y = y;
    this.avance = 1;
    this.r = 30;
    this.type = t;
    this.show = true;
    this.cont = 1;
  }

  move(){
    this.x += this.avance;
  }

  bajar(){
      this.y += 50;
      this.avance *=-1;
  }

  borrar(){
    this.show = false;
    this.y = -height*2;
  }

  mostrar(){
  if ( this.show )
      rect (this.x,this.y,this.r,this.r);
  }
}
