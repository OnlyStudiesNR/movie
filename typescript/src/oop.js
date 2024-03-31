"use strict";
class People {
    constructor(name, income) {
        this.name = name;
        this.income = income;
    }
    calcIncome() {
        return `${this.name} receive ${this.income} per year.`;
    }
}
class ContaBancaria {
    constructor(numberConta) {
        // private saldo: number = 0;
        this.saldo = 0;
        this.numeroConta = numberConta;
    }
    // methodos static pertence apenas a classe que definiu ele 
    static retonarNumeroBanco() {
        return 145;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 500;
    }
}
const contaDavanusa = new ContaBancariaPessoaFisica(2345761);
contaDavanusa.depositar(500000);
ContaBancaria.retonarNumeroBanco();
// protected 
// esta disponiveis na class pai e nas class filhas,
// public 
// E o padrão não precisa declarar
// private 
// So a class que declaro tem acesse
// static 
// So a classe que delcarrou pode invocalo.
