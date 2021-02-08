console.log(`Trabalhando com condicionais
*****************`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

// if( idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// }else if(estaAcompanhada){
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// }else{
//     console.log("Comprador nao e maior de idade e nao posso vender!");
// }

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1);
}else{
    console.log("Nao e maior de idade e nao posso vender!");
}

console.log("Embarque: \n \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
} else{
    console.log("Voce nao pode embarcar!");
}
console.log(listaDeDestinos);
