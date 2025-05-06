// Criar uma classe para representar Veiculo
// Atributos: marca, modelo, ano
// Métodos: exibirInfo()

class Veiculo {
    // Encapsulamento dos atributos
    #marca;
    #modelo;
    #ano;

    // Construtor
    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    // Métodos
    exibirInfo() {
        console.log(`Marca: ${this.#marca}`);
        console.log(`Modelo: ${this.#modelo}`);
        console.log(`Ano: ${this.#ano}`);
    }
}

// Subclasse Carro que herda de Veiculo
class Carro extends Veiculo {
    #numeroPortas;
    
    // Construtor
    constructor(marca, modelo, ano, numeroPortas) {
        super(marca, modelo, ano);
        this.#numeroPortas = numeroPortas;
    }

    // Métodos
    exibirInfo() {
        super.exibirInfo();
        console.log(`Número de Portas: ${this.#numeroPortas}`);
    }
}

let carro1 = new Carro("Toyota", "Corolla", 2023, 4);
carro1.exibirInfo();
