class People {
    name: string;
    income?: number;

    constructor(name: string, income?: number) {
        this.name = name;
        this.income = income;
    }

    
    calcIncome(): string {
        return `${this.name} receive ${this.income} per year.`
    }
}

class ContaBancaria {
    // private saldo: number = 0;
    protected saldo: number = 0;
    numeroConta: number;
    
    constructor(numberConta: number) {
        this.numeroConta = numberConta;
    }
    
    // methodos static pertence apenas a classe que definiu ele 
    static retonarNumeroBanco() {
        return 145
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 500;
    }
}

const contaDavanusa = new ContaBancariaPessoaFisica(2345761)
contaDavanusa.depositar(500000)

ContaBancaria.retonarNumeroBanco()


// protected 
// esta disponiveis na class pai e nas class filhas,

// public 
// E o padrão não precisa declarar

// private 
// So a class que declaro tem acesse

// static 
// So a classe que delcarrou pode invocalo.