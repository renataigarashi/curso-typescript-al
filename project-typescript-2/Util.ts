export class Util {
  public static randomize(ini: number, fim: number): number {
    return +(ini + Math.random() * (fim - ini)).toFixed(2);
  }
}