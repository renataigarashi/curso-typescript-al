import { Util } from "../Util";

export class Character {
  protected _name: string;
  protected _armor: number;
  protected _maxLife: number;
  protected _currentLife: number;
  constructor(name: string){
    this._name = name;
    this._armor = Util.randomizar(100, 1_000);
    this._maxLife = Util.randomizar(100, 1_000);
    this._currentLife = Util.randomizar(40, this._maxLife)
  }
}