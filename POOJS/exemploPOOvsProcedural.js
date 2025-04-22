// diferença entre POO e Procedural(estrutural)

//procedural
//declaração de variavel
let produto1 = {
    nome: "Celular",
    preco: 1000,
    desconto: function(){
        return this.preco *0.1;
    }

}//coleção

let produto2 = {
    nome: "Camera digital",
    preco: 5000,
    desconto: function(){
        return this.preco *0.1;
    }

}//coleção

//X

//POO - classe de produtos

class Produto{
    //atributos
    #nome; // # PRIVADO
    #preco;// # privado

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    //criar métodos getter e setter
    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }
    desconto(){
        return this.preco * 0.1; //erro ao cama o this.preco, pois o atributo é privado
    }
}

//instanciar um objeto
let p1 = new Produto("Impressora", 2000);
let p2 = new Produto("tablet", 1500);


//exemplos de uso de POO
class Pessoa{
    // atributos privados
    #nome;
    #idade;
    #cpf;

    //construtor
    constructor(nome, idade, cpf){
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    //metodos públicos
    get getNome(){return this.#nome;}
    get getIdade(){return this.#idade;}
    get getCpf(){return this.#cpf;}

    set setIdade(idade){this.#idade = idade;}

    //metodos Informações
    exibirInfo(){
        console.log(`Nome: ${this.getNome} \nIdade: ${this.getIdade} \ncpf: ${this.getCpf}`);
    }
}

let pessoa1 = new Pessoa("João", 30, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", 35, "987.456.123-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 31; //atualizei a idade da pessoa
pessoa1.exibirInfo();

//herança (extends)
class Funcionario extends Pessoa {
    //atributos privados
    #cargo;
    #salario;

    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(noome, idade, cpf); //chama o construtor da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //metodos publicos
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    set getSalario(salario){
        this.#salario = salario;
    }
set getCargo(cargo){
    this.#cargo = cargo;
}
//metodos exibirInfo
exibirInfo(){
    super.exibirInfo(); //chama da superclasse
    console.log(`Cargo: ${this.getCargo} \nSalário: ${this.getSalario}`);
}
}

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);

funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo(); //exibir as informações atualizadas