import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("thyez", 11122233309);
const cliente2 = new Cliente("Jaciara", 88822233309);
const contaCorrenteThyez = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);

console.log(ContaCorrente.numeroDeContas);