class ghost{
  constructor(xo, yo, coR, coG, coB, m, state, home, escape){
    this.x = xo;
    this.y = yo;
    this.colorR = coR;
    this.colorG = coG;
    this.colorB = coB;
    this.moving;
    this.bo;
    this.getColor;
    this.m = m;
    this.goalX = 988;
    this.goalY = 232;
    this.state = state;
    this.home = home;
    this.escape = escape;
  }
  display(){
    push();
    if(this.state){
    fill(this.colorR, this.colorG, this.colorB);
  }
  else{
    if(!this.escape){
    fill(255, 255, 255);
  }
  else{
    fill(50, 50, 50);
   }
  }
    ellipse(this.x, this.y, 35, 35);
    pop();
  }
  move(s){
    if(this.x >= 1133){
      this.x = 515;
    }
    if(this.x <= 509){
      this.x = 1133;
    }
    switch(this.m){
      case 0:{
        this.getColor = get(this.x - 20, this.y);
        if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
          if(this.y<this.goalY){
            this.getColor = get(this.x, this.y+20);
            if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
              this.m = 3;
            }
            else{
              this.m = 1;
            }
          }
          else{
            this.getColor = get(this.x, this.y-20);
            if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
              this.m = 1;
            }
            else{
              this.m = 3;
            }
          }
        }
        else{
          this.x = this.x - s;
        }
        break;
      }

      case 1:{
        this.getColor = get(this.x, this.y + 20);
          if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
            if(this.x<this.goalX){
              this.getColor = get(this.x+20, this.y);
              if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
                this.m = 0;
              }
              else{
                this.m = 2;
              }
            }
            else{
              this.getColor = get(this.x-20, this.y);
              if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
                this.m = 2;
              }
              else{
                this.m = 0;
              }
            }
          }
          else{
            this.y = this.y + s;
          }

      break;
      }

      case 2:{
        this.getColor = get(this.x  + 20, this.y);
          if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
            if(this.y<this.goalY){
              this.getColor = get(this.x, this.y + 20);
              if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
                this.m = 3;
              }
              else{
                this.m = 1;
              }
            }
            else{
              this.getColor = get(this.x, this.y - 20);
              if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
                this.m = 1;
              }
              else{
                this.m = 3;
              }
            }


          }
          else{
            this.x = this.x + s;
          }
        break;
      }

      case 3:{
        this.getColor = get(this.x  , this.y - 20);
          if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
            if(this.x<this.goalX){
              this.getColor = get(this.x  + 20, this.y);
              if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
                this.m = 0;
              }
              else{
                this.m = 2;
              }
            }
            else{
              this.getColor = get(this.x  - 20, this.y);
              if((this.getColor[2]>150)&&(this.getColor[0]+this.getColor[1]<50)){
                this.m = 2;
              }
              else{
                this.m = 0;
              }
            }

          }
          else{
            this.y = this.y - s;
          }
        break;
      }

    }

  }
}
