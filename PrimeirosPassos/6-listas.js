console.log(`Trabalhando com listas`);

/* const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`; */

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // Adiciona item no array

console.log("Destinos possiveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// listaDeDestinos = 2; ----- Isso nao pode! Pois atribuir novamente uma constante não é permitido.
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);