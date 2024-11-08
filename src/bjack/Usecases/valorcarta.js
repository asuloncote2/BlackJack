export const Valorcarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;
    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;

    } else {
        puntos = parseInt(valor);
    }
    return puntos;
}