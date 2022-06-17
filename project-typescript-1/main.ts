import Personagem from './Personagem'
import prompt from 'prompt-sync';

let person: Personagem = new Personagem('Samus Aran', 80, 100, 50, 60);

// prompt vai pegar os dados enviados pelo teclado
let teclado = prompt();
let option: number = 0;
while (option != 9 ) {
  
  
  console.log(' ');
  console.log('======================================');
  console.log('Selecione um numero e escolha a ação ');
  console.log(`+===== Personagem: ${person.nome} =======+`);
  console.log('| 1. Treinar ataque                  |')
  console.log('| 2. Treinar defesa                  |')
  console.log('| 3. Descansar                       |')
  console.log('| 4. Entrar em batalha               |')
  console.log('| 8. Imprimir atributos              |')
  console.log('| 9. Sair                            |')
  console.log('+====================================+');
  console.log(' ');
  

  // coloquei o +, pois vai converter string recebida como number
  option = +teclado('Escolha uma ação: ');

  switch (option) {
    case 1:
     person.treinarAtaque();
     console.log(person.showStatus());
     
      break;
    case 2:
     person.treinarDefesa();
     console.log(person.showStatus());
      break;
    case 3:
     person.descansar();
     console.log(person.showStatus());
      break;
    case 4:
     person.batalhar();
     console.log(person.showStatus());
     console.log('is dead?', person.isDead());
     
     break;
     case 8:
       console.log(person.showStatus());
      break
    case 9:
      break;
    default:
      console.log('Opção invalida, selecione novamente!')
      break;
  }
}

