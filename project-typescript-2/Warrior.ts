import { Character } from "./project-typescript-2/Character";
import { Util } from "./Util";

class Warrior extends Character {
  private _forca: number;
  private _agilidade: number;
  constructor(name: string) {
    super(name)
     this._forca = Util.randomizar(100, 1_000);
     this._agilidade = Util.randomizar(100, 1_000)
  }
}