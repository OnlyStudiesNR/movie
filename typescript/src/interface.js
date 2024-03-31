"use strict";
class Conta {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrent extends Conta {
    constructor() {
        super(...arguments);
        this.telefone = 0;
        this.cnpj = 0;
        this.taxaTranferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor;
        return true;
    }
    ;
}
