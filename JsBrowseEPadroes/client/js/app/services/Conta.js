class Conta {
    constructor(saldo) {

        this._saldo = saldo;
    }

    atualiza(taxa) {

        throw new Error("O método atualiza deve ser sobrescrito em uma classe filha!");
    }

    get saldo() {
        return this._saldo;
    }
}