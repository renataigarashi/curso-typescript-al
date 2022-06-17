export class Util {
  public static randomizar(ini: number, fim: number): number {
    return ini + Math.random() * (fim - ini);
  }
}