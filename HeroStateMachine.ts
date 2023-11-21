import BaseHero from './BaseHero'
export default class HeroStateMachine {
    hero: typeof BaseHero;
    constructor() {
        this.hero = BaseHero;
    }
}