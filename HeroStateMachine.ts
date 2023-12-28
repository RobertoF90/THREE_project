import BaseHero from './BaseHero'
const uiBR = document.getElementById('ui-br') as HTMLElement;
const width = uiBR.clientWidth;




export default class HeroStateMachine {
    hero: typeof BaseHero;
    turnState: string[];
    config: any;
    currentState: any;
    cur_cooldown: number;
    max_cooldown: number;
    constructor() {
        this.hero = BaseHero;
        this.turnState = ['PROCESSING',  'ADDTOLIST', 'WAITING',"SELECTING", 'ACTION', "DEAD"]
        this.currentState = this.turnState[0];

        this.cur_cooldown = 0;
        this.max_cooldown = 100;
    }


    update() {

        switch (this.currentState) {
            case  "PROCESSING" : 
            this.updateProgressBar()
            break;

            case "ADDTOLIST":
                break;

            case "WAITING":
                break;
            
            case "SELECTING":
                break;
            
            case "ACTION":
                 break;

            case "DEAD":
                break;
        }
    }

    updateProgressBar() {
        this.cur_cooldown = this.cur_cooldown + 0.3;

        let calc_cooldown = this.cur_cooldown / this.max_cooldown;

        if (this.cur_cooldown >= this.max_cooldown) {
            this.currentState = this.currentState[1]
        }
    }
}