const uiBR =  document.getElementById('ui-br') as HTMLCanvasElement;
const ctxBR = (uiBR).getContext('2d');



export default class Hero1ATB {
    x: number;
    y: number;
    width: number;
    height: number;
    padding: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.padding = 12;
    }

    draw() {
       
        
      
    }

    update(hero1ATB: number) {
        if(ctxBR){
            ctxBR.fillStyle = '#fff';
            ctxBR.fillRect(this.width / 4, this.height / 4, this.width / 4 - this.padding, this.padding);
            ctxBR.fillStyle = '#000';
            ctxBR.fillRect(this.width / 4, this.height / 4,  hero1ATB, this.padding);
        }
    }


}


