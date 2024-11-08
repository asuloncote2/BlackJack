export const pedirCarta = (Deck) => {
    if (Deck.length === 0) {
        throw 'No hay Cartas';
    }
    const carta = Deck.pop();

    return carta;

}