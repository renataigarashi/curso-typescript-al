import { Character } from "./Character";
import { Util } from "./Util";

export class Mage extends Character {
  private _inteligence: number;
  private _speed: number;
  constructor(name: string){
    super(name);
    this._armor = Util.randomize(100, 1_000);
    this._maxLife = Util.randomize(200, 1_000);
    this._currentLife = Util.randomize(40, this._maxLife);
    this._inteligence = Util.randomize(100, 1_000);
    this._speed = Util.randomize(10, 2_000);
   }
}