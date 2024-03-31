class Conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTranferencia: number;
}

interface ITransacional2 {
    cnpj: number;
}

interface ITransacional3 extends ITransacional2 {
    telefone: number;
}

class ContaCorrent extends Conta implements ITransacional, ITransacional3 {
    telefone: number = 0;
    cnpj: number = 0;


    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor;
        return true;
    };

    taxaTranferencia: number = 0;
}