const uiBR =  document.getElementById('ui-br') as HTMLCanvasElement;
const ctxBR = (uiBR).getContext('2d');

export default class ATB {
    x: number;
    y: number;
    width: number;
    height: number;
    padding: number;
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        this.padding = 12;
    }

    draw() {
    }

    update(hero1ATB: number) {
        if(ctxBR){
            ctxBR.fillStyle = '#fff';
            ctxBR.fillRect(this.x / 4, this.y / 4, this.width / 4 - this.padding, this.padding);


            ctxBR.fillStyle = '#000';
            ctxBR.fillRect(this.x / 4, this.y / 4,  hero1ATB, this.padding);
        }
    }


}


