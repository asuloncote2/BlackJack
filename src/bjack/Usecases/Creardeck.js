
import _ from 'underscore';
export function crearDeck(tipodecartas,cartasEspeciales) {
    let Deck = [];
  
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipodecartas) {
            Deck.push(i + tipo);
        }

    }
    for (let tipo of tipodecartas) {
        for (let especial of cartasEspeciales) {
            Deck.push(especial + tipo);
        }
    }

    console.log(Deck);
    Deck = _.shuffle(Deck);
    return Deck;
}