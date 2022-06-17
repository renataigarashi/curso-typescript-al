import { Character } from "./Character";
import { Util } from "./Util";

export class Warrior extends Character {
  private _force: number;
  private _agility: number;
  //construtor privado, a classe não pode ser extendida
  constructor(name: string) {
    super(name);
    this._armor = Util.randomize(1_000, 10_000);
    this._maxLife = Util.randomize(200, 10_000)
    this._currentLife = Util.randomize(20, this._maxLife)
    this._force = Util.randomize(100, 1_000);
    this._agility = Util.randomize(100, 1_000);
  }
}