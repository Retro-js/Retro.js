class Pong {

    constructor( left ) {
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;

        if(left){
            this.x = (width/2)-280;
        }
        else {
            this.x = width/2 + 280;
        }

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
