import { Character } from "./Character";
import { Util } from "./Util";

export class Priest extends Character {
  private _spirit: number;
  private _versatility: number;
  constructor(name: string){
    super(name);
    this._armor = Util.randomize(100, 1_000)
    this._maxLife = Util.randomize(20, 1_000);
    this._currentLife = Util.randomize(20, this._maxLife)
    this._spirit = Util.randomize(100, 1_000);
    this._versatility = Util.randomize(100, 1_000);
  }
}