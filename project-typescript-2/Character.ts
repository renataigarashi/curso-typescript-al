import { Util } from "./Util";

export class Character {
  protected _name: string;
  protected _armor: number;
  protected _maxLife: number;
  protected _currentLife: number;
  //caso coloque Private no constructor, não será possivel estender ou estanciar a classe
  constructor(name: string){
    this._name = name;
    this._armor = Util.randomize(1000, 10_000);
    this._maxLife = Util.randomize(200, 10_000);
    this._currentLife = Util.randomize(40, this._maxLife)
  }
}

/* REGRA DE OURO HERANCA: É um ou tem um. 
Ex: Warrior é um character? Sim!, É UM character, entao tem herança
Warrior é uma raça? Não! Warrior TEM UMA raça. Então seria uma composição (teria um atributo raça do tipo raça)
*/