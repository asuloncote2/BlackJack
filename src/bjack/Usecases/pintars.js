
const scorejugador = document.querySelector('#ScoreJugador');
const scoreComputadora = document.querySelector('#ScoreComputadora');

export const pintar = (valor,bandera) =>{
    if(bandera == 0){
        scorejugador.textContent = valor;
    }
    else{
        scoreComputadora.textContent = valor;
    }
    
}