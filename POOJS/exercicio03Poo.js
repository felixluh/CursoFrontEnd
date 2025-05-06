// Atividade 3: Criar uma classe representando uma conta bancária
// Atributos: titular, saldo
// Métodos: depositar, sacar, exibirSaldo()

class ContaBancaria {
    // Encapsulamento dos atributos
    #titular;
    #saldo;

    // Construtor
    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = 0;
    }
    
    // Métodos 
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito realizado com sucesso! Saldo atual: ${this.#saldo}`);   
        } else {
            console.log("Informe um valor válido para o depósito!");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque realizado com sucesso! Saldo atual: ${this.#saldo}`);
        } else if (valor > this.#saldo) {
            console.log(`Saldo insuficiente! Saldo atual: ${this.#saldo}`);
        } else {
            console.log("Informe um valor válido para o saque!");
        }
    }

    exibirSaldo() {
        console.log(`Titular: ${this.#titular} \nSaldo: ${this.#saldo}`);
    }
}

let conta1 = new ContaBancaria("Marco A Barbosa", 100000);
conta1.exibirSaldo();
conta1.depositar(1000);
conta1.exibirSaldo();
conta1.sacar(1000000);
conta1.exibirSaldo();
conta1.sacar(9000);
conta1.exibirSaldo();
