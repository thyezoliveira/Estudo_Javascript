console.log(`Trabalhando com condicionais
*****************`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const destino = 'Curitiba';
const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);
let temPassagemComprada = false;
let contadorDeDestinos = 0;
let destinoExiste = false;

console.log(listaDeDestinos);
if(podeComprar){
    temPassagemComprada = true;
}

while(contadorDeDestinos < 3) {
    if(listaDeDestinos[contadorDeDestinos] == destino){
        destinoExiste = true;
        break;
    }
    contadorDeDestinos += 1;
}

if(temPassagemComprada && destinoExiste){
    console.log("BOA VIAGEM!");
}else{
    console.log("Desculpe tivemos um erro!");
}