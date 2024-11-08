
import _ from 'underscore';
import { crearCartas,alertas,Valorcarta,pintar,pedirCarta,crearDeck} from './Usecases';


(() =>{
  'use strict'
  let Deck = [];
  const tipos = ['C', 'D', 'H', 'S']
  const Especiales = ['A', 'J', 'Q', 'K']
  const btnPedir = document.querySelector('#btnPedirCarta');
  const cartasimgJ = document.querySelector('#Jugador-cartas');
  const cartasimgPC = document.querySelector('#Compuradora-cartas');
  const btnDtener = document.querySelector('#btnDetener');
  const scorejugador = document.querySelector('#ScoreJugador');
  const scoreComputadora = document.querySelector('#ScoreComputadora');
  
  
  let puntosJugador = 0;
  let puntosComputadora = 0;
  
  Deck = crearDeck(tipos,Especiales);
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(Deck);
    puntosJugador = puntosJugador + Valorcarta(carta);
    pintar(puntosJugador,0);
    crearCartas(carta,cartasimgJ);

    if (validarpuntos(puntosJugador) == 1) {
        let titulo = "Perdiste";
        let texto = "Sacaste mas de 21";
        let icono = "warning";
        alertas(titulo, texto, icono);

    } 
})
  const validarpuntos = (puntosJugador) => {
  
      let bandera = 0;
      if (puntosJugador > 21) {
  
          return bandera = 1;
      }
      else {
          return bandera = 0;
      }
  
  
  
  }
  btnDtener.addEventListener('click', () =>{
  
      btnPedir.disabled = true;
      let puntosJ2 = parseInt(scorejugador);
      pedirCartaComputadora(puntosJ2);
  
  
  
  })
  
  const pedirCartaComputadora = (puntosJ) =>{
      const carta = pedirCarta(Deck);
      puntosComputadora = puntosComputadora + Valorcarta(carta);
      pintar(puntosComputadora,1);
      crearCartas(carta,cartasimgPC);
      do{
          const carta = pedirCarta(Deck);
          puntosComputadora = puntosComputadora + Valorcarta(carta);
          pintar(puntosComputadora,1);
          crearCartas(carta,cartasimgPC);
  
      }while(puntosComputadora<=puntosJugador);
      if(puntosComputadora > 21){
          let titulo = "GANASTE";
          let texto = "La computadora saco mas de 21";
          let icono = "warning";
          alertas(titulo, texto, icono);
      }
      else if(puntosComputadora<=21 && puntosComputadora>puntosJugador){
          let titulo = "Perdiste";
          let texto = "la compu saco mas que tu";
          let icono = "warning";
          console.log(scoreComputadora,scorejugador +"perdiste");
          alertas(titulo, texto, icono);
      }
      
      
  
  }
})();




