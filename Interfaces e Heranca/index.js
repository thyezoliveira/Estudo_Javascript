import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Thyez", 10000, 1234567890);
const gerente = new Gerente("Jaciara", 5000, 9876543210);
gerente.cadastrarSenha("1234");
diretor.cadastrarSenha("4321");

const cliente = new Cliente("Lais", 756987541564, "789");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "4321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "789");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);