class cookies{
  constructor(xo, yo, state){
    this.x = xo;
    this.y = yo;
    this.state = state;
  }
  display(){
    if(this.state){
    this.seconds = second();
    push();
    if((this.seconds%2)%2==0){
    fill(255, 180, 120);
  }
  else{
    fill(255, 255, 0);
  }
    ellipse(this.x, this.y, 25, 25);
    pop();
    }
  }
}
