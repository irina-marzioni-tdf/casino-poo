import { Tragamonedas } from "./00-Tragamonedas";
import { Jugador } from './00-Jugador';
import { Blackjack } from "./00-Blackjack";


//-------Interactuador de lineas de comando por terminal------
let readlineSync = require('readline-sync');

export class Casino {
  protected tragamonedas1: Tragamonedas;
  protected blackjack: Blackjack;
  protected jugador: Jugador;


  constructor(paramTragamonedas1: Tragamonedas, paramBlackjack:Blackjack ,pJugador: Jugador) {
    this.tragamonedas1 = paramTragamonedas1;
    this.blackjack = paramBlackjack;
    this.jugador = pJugador;
  }

  public jugarTragamonedas1(pJugador: Jugador) {
    this.tragamonedas1.jugarTragamonedas(pJugador);
    this.interaccionCasino();//le agregue esta linea para no salir del casino
  }


  public jugarBlackjack(pJugador: Jugador) {
    this.blackjack.jugarBlackjack(pJugador);
    //this.interaccionCasino(); le agregue esta linea para no salir del casino
  }


  public interaccionCasino() {

    let salidaCasino: boolean = false;

    while (salidaCasino === false) {

      let juegos = ['Tragamonedas de 3 Slots', 'Tragamonedas2', 'Dados', 'Blackjack', 'Consultar saldo de jugador', 'Cargar saldo de jugador'], index = readlineSync.keyInSelect(juegos, 'Elija la opcion, juego, o cero para salir');

      console.log("------------------------------------------------------------------------------------")

      switch (juegos[index]) {
        case 'Tragamonedas de 3 Slots':
          if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
            console.log("No posee saldo suficiente para jugar al Tragamonedas de 3 Slots, cargue saldo y vuelva a intentar!")
            console.log("------------------------------------------------------------------------------------")
            this.interaccionCasino();
          } else {
            console.log("<Bienvenido al juego de Tragamonedas de 3 Slots>")
            console.log("------------------------------------------------------------------------------------")
            this.jugarTragamonedas1(this.jugador);
          }
          break;

        case 'Tragamonedas2':
          console.log("<Bienvenido al juego de Tragamonedas2 -variante del 1ero [void]>")
          console.log("------------------------------------------------------------------------------------")
          break;

        case 'Dados':
          console.log("<Bienvenido al juego de Dados [void] ")
          console.log("------------------------------------------------------------------------------------")
          break;

          case 'Blackjack':
          if (this.jugador.getSaldoJugador() < 100 || this.jugador.getSaldoJugador() === undefined || this.jugador.getSaldoJugador() === null) {
            console.log("No posee saldo suficiente para jugar al Blackjack, cargue saldo y vuelva a intentar!")
            console.log("------------------------------------------------------------------------------------")
            this.interaccionCasino();
          } else {
            console.log("<Bienvenido al juego de Blackjack>")
            console.log("------------------------------------------------------------------------------------")
            this.jugarBlackjack(this.jugador);
          }
          break;

        case 'Consultar saldo de jugador':
          console.log(this.jugador.getSaldoJugador());
          break;

        case 'Cargar saldo de jugador':
          let cargarSaldo: number = readlineSync.questionInt("ingrese la cantidad para agregar al saldo: ");
          this.jugador.comprarSaldo(cargarSaldo);
          console.log("<Se han agregado " + cargarSaldo + " al saldo del jugador!");
          console.log("<El saldo actual es de " + this.jugador.getSaldoJugador());
          break;

        default:
          index = 0;
          console.log("gracias vuelvas prontos ")
          console.log("------------------------------------------------------------------------------------")
          salidaCasino = true;  
          break;
      }
      /*if (index === 0) {
        salidaCasino = true;
      }*/
    }
  }
}

// Dejamos acá por ahora
// Definir clase jugador 

let maquina1 = new Tragamonedas(3, 100);
let blackjack1 = new Blackjack(300)
let jugador1: Jugador = new Jugador('Pepe', 0);

let CasinoUshuaia = new Casino(maquina1, blackjack1, jugador1);

CasinoUshuaia.interaccionCasino();