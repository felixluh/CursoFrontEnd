// Criar uma classe para representar um sistema de funcionários

class Funcionario {
    // Encapsulamento
    #nome;
    #salario;
    #cargo;

    // Construtor
    constructor(nome, salario, cargo) {
        this.#nome = nome;
        this.#cargo = cargo;
        this.#salario = salario;
    }

    // Métodos
    aumentarSalario(percentagem) {
        if (percentagem > 0) {
            this.#salario += this.#salario * (percentagem / 100);
            console.log(`Salário aumentado em ${percentagem}%! Salário atual: ${this.#salario}`);
        } else {
            console.log("Informe um valor válido para o aumento de salário!");
        }
    }

    set setCargo(cargo) {
        this.#cargo = cargo;
    }

    exibirInfo() {
        console.log(`Nome: ${this.#nome}`);
        console.log(`Salário: ${this.#salario}`);
        console.log(`Cargo: ${this.#cargo}`);
    }
}

let funcionario1 = new Funcionario("Marco A Barbosa", 12000, "Desenvolvedor Junior");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
funcionario1.setCargo = "Desenvolvedor Pleno";
funcionario1.exibirInfo();
