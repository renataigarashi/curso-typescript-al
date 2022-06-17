// nome, energia, vida, ataque, defesa
export default class Personagem {
  constructor(
    private _nome: string,
    private _energia: number,
    private _vida: number,
    private _ataque: number,
    private _defesa: number
  ) {}

  // TODA VEZ QUE FOR PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
  // TODA VES QUE FOR PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO
  
  public get nome() : string {
    return this._nome;
  }
  
  public set nome(nome: string){
    this._nome = nome;
  }

  public get vida(): number {
    return this._vida
  }
  
  public set vida(vida: number) {
    this._vida = vida;
  }

  public get energia(): number {
    return this._energia
  }
  
  public set energia(energia: number) {
    this._energia = energia
  }
  
  public get ataque(): number {
    return this._ataque
  }

  public set ataque(ataque : number) {
    this._ataque = ataque;
  }

  public get defesa(): number {
    return this._defesa
  }

  
  public set defesa(defesa : number) {
    this._defesa = defesa;
  }
  

  public showStatus(): string {
    return (
      "Nome: " +
      this.nome +
      ("\nVida: " + this.vida.toFixed(1)) +
      ("\nEnergia: " + this.energia.toFixed(1)) +
      ("\nAtaque: " + this.ataque.toFixed(1)) +
      ("\nDefesa: " + this.defesa.toFixed(1))
  );
  }

  public treinarAtaque(): void {

    if ((this.ataque) > 99) {
      this.ataque = 100;
      console.log('Treinamento completo, não é possível adicionar mais pontos!')
    } else if (this.hasEnergy()) {
      console.log('Sem energia, descanse e treine mais tarde')
    } else{
    this.ataque += this.randomValue(5)
    this.energia -= this.randomValue(10)
    }
  }


  public treinarDefesa(): any {
    if (this.defesa > 99) {
      this.defesa = 100;
      console.log('Treinamento completo, não é possível adicionar mais pontos!')
    } else if (this.hasEnergy()) {
      console.log('Você está sem energia, descanse e treine mais tarde')
    } else {
      this.defesa += this.randomValue(5)
      this.energia -= this.randomValue(10)
  }
}  
  public descansar(): void {
    this.energia += this.randomValue(10);
    if (this.energia > 100) {
      this.energia = 100;
      console.log('Energia totalmente recuperada')
    }
  }
  public batalhar(): void {
  let dano = 0;
  dano = this.randomValue(100)
  this.vida -= dano
   if(this.isDead()) {
     console.log('GAME OVER!!')
     console.log( '-------------------');
    } else {
      console.log('Parabéns, você venceu')
      console.log( '-------------------');
      
      console.log('Dano recebido: ', dano.toFixed(1));
   }
  } 
  public isDead(): boolean {
      if(this.vida < 1) { 
        this.vida = 0
        return true
      } else {
        return false
      }
    }

    private randomValue(factor: number): number {
      return Math.random() * factor;
    }
    hasEnergy(): boolean {
      if (this.energia < 0) {
        this.energia = 0;
        return true
    } else {
      return false 
    }
  }
}  
