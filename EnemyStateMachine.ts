import BaseEnemy from './BaseEnemy'

export default class EnemyStateMachine {
    enemy: typeof BaseEnemy;

    constructor(){
        this.enemy = BaseEnemy;
    }
}