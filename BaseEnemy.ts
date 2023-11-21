export default class BaseEnemy {
  name: string;
  baseHP: number;
  currHP: number;
  baseMP: number;
  currMP: number;
  stamina: number;
  intellect: number;
  dexterity: number;
  agility: number;
  constructor(
    name: string,
    baseHP: number,
    currHP: number,
    baseMP: number,
    currMP: number,
    stamina: number,
    intellect: number,
    dexterity: number,
    agility: number
  ) {
    this.name = name;
    this.baseHP = baseHP;
    this.currHP = currHP;
    this.baseMP = baseMP;
    this.currMP = currMP;
    this.stamina = stamina;
    this.intellect = intellect;
    this.dexterity = dexterity;
    this.agility = agility;
  }
}
