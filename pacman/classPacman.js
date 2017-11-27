class pacman {
  constructor(xo, yo){
	this.x=xo;
	this.y=yo;
  this.lv = [];
  this.despachador = 0;
  this.puntuation = 0;
  this.power = false;
  this.alert = false;
  this.counter = 0;
  this.seconds = second();
  for(let i = 0; i<500; i++){
    this.lv[i] = [];
  }
  for(let i = 0; i<500; i++){
    this.lv[i][0] = false;
  }
  this.lv[0][0] = true;
}
	display(){
		fill(255, 255, 0);
		ellipse(this.x, this.y, 35, 35);
	}

	 move(s){
     this.seconds = second();
     if(this.x >= 1133){
       this.x = 515;
     }
     if(this.x <= 509){
       this.x = 1133;
     }
     this.bol = false;
     for(let i=1; i<500; i++){
       if(this.lv[i][0]){
         if(this.lv[i][3]>20){
         push(0);
         fill(0);
         rect(this.lv[i][1]-13, this.lv[i][2]-13, 27, 27);
         pop();
       }
       else{
         push(0);
         fill(0);
         rect(this.lv[i][1]-13, this.lv[i][2]-18, 27, 42);
         pop();
      }
    }
  }
     this.m;
     this.boA = [0, 0, 0, 0];
     this.boB = [0, 0, 0, 0];
     this.boC = [0, 0, 0, 0];

		if(keyIsPressed){
			if(key=='a'){
				this.m = 0;
			}else{
				if(key=='s'){
				this.m = 1;
				}else{
					if(key=='d'){
					this.m = 2;
			}else{
			if(key=='w'){
				this.m = 3;
						}
					}
				}
			}
		}
    switch (this.m) {
      case 0:{
        this.despachador = 0;
        this.boA = get(this.x - 20, this.y);
        if((this.boA[2] > 200)&&(this.boA[1]+this.boA[0]<100)){
          this.x = this.x;
        }
        else{
          if(this.boA[1] + this.boA[0] > 50){
            if(this.despachador == 0){
            for(let i = 0; i<500; i++){
              if((this.lv[i][0])&&(!this.lv[i+1][0])){
                this.despachador = i+1;
              }
            }
          }
            this.lv[this.despachador][0] = true;
            this.lv[this.despachador][1] = this.x - 20;
            this.lv[this.despachador][2] = this.y;
            this.lv[this.despachador][3] = this.boA[0];
            if(this.despachador!= 0){
              this.puntuation = this.despachador;
            }
      }
          else{
          this.x = this.x - s;
          }
        }

        break;
      }
      case 1:{
        this.despachador = 0;
        this.boA = get(this.x, this.y  + 20);

        if((this.boA[2] > 200)&&(this.boA[1]+this.boA[0]<100)){
          this.y = this.y;
        }
        else{
          if(this.boA[1] + this.boA[0] > 50){
            if(this.despachador == 0){
            for(let i = 0; i<500; i++){
              if((this.lv[i][0])&&(!this.lv[i+1][0])){
                this.despachador = i+1;
              }
            }
          }
            this.lv[this.despachador][0] = true;
            this.lv[this.despachador][1] = this.x;
            this.lv[this.despachador][2] = this.y  + 20;
            this.lv[this.despachador][3] = this.boA[0];
            if(this.despachador!= 0){
              this.puntuation = this.despachador;
            }
      }
          else{
          this.y = this.y + s;
          }

        }

        break;
      }
      case 2:{
        this.despachador = 0;
        this.boA = get(this.x + 20, this.y);

        if((this.boA[2] > 200)&&(this.boA[1]+this.boA[0]<100)){
          this.x = this.x;
        }
        else{
          if(this.boA[1] + this.boA[0] > 50){
            if(this.despachador == 0){
            for(let i = 0; i<500; i++){
              if((this.lv[i][0])&&(!this.lv[i+1][0])){
                this.despachador = i+1;
              }
            }
          }
            this.lv[this.despachador][0] = true;
            this.lv[this.despachador][1] = this.x  + 20;
            this.lv[this.despachador][2] = this.y;
            this.lv[this.despachador][3] = this.boA[0];
            if(this.despachador!= 0){
              this.puntuation = this.despachador;
            }
      }
          else{
          this.x = this.x + s;
          }

        }

        break;
      }
      case 3:{
        this.despachador = 0;
        this.boA = get(this.x   , this.y - 20);
        
        if((this.boA[2] > 200)&&(this.boA[1]+this.boA[0]<100)){
          this.y = this.y;
        }
        else{
          if(this.boA[1] + this.boA[0] > 50){
            if(this.despachador == 0){
            for(let i = 0; i<500; i++){
              if((this.lv[i][0])&&(!this.lv[i+1][0])){
                this.despachador = i+1;
              }
            }
          }
            this.lv[this.despachador][0] = true;
            this.lv[this.despachador][1] = this.x;
            this.lv[this.despachador][2] = this.y -20;
            this.lv[this.despachador][3] = this.boA[0];
            if(this.despachador!= 0){
              this.puntuation = this.despachador;
            }
      }
          else{
          this.y = this.y - s;
          }

        }

        break;
      }
    }




	}


}
