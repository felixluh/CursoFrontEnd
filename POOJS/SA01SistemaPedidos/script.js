// Criar a lógica do sistema de pedidos

// Modelar as Classes
class Cliente {
    #id;
    #nome;
    #cpf;

    // Construtor
    constructor(id, nome, cpf) {
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
    }

    // Métodos getters e setters
    getId() {
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    getCpf() {
        return this.#cpf;
    }
}

class Produto {
    // Atributos encapsulados
    #id;
    #nome;
    #preco;

    // Construtor
    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }

    // Métodos públicos
    getId() {
        return this.#id
    }

    getNome() {
        return this.#nome
    }

    getPreco() {
        return this.#preco
    }
}

class Pedido {
    // Atributos encapsulados
    #id;
    #cliente;
    #itens;
    #desconto;
    #valorTotal;

    // Construtor
    constructor(id, cliente, itens, desconto) {
        this.#id = id;
        this.#cliente = cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.#valorTotal = this.calcularValorTotal();
    }

    // Métodos públicos
    getId() {
        return this.#id;
    }

    getCliente() {
        return this.#cliente;
    }

    getItens() {
        return this.#itens;
    }

    getDesconto() {
        return this.#desconto;
    }

    getValorTotal() {
        return this.#valorTotal;
    }

    calcularValorTotal() {
        let total = this.#itens.reduce((acc, item) => acc + item.getPreco() * item.quantidade);
        total -= ((this.#desconto / 100) * total);
    }
}

// Criar a calsse controller // Gerenciar os meus pedidos
class SistemaPedidos {
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }
    // Métodos públicos
    cadastrarCliente() {
        const nome = document.getElementById("nomeCliente").value;
        const cpf = document.getElementById("cpfCliente").value;
        if (!nome || !cpf) { // Verifica se os campos estão preenchidos
            alert("Preencha todos os campos!");
            return;
        }
        // Instanciar um novo cliente
        const cliente = new Cliente(this.clientes.length + 1, nome, cpf);
        // Adcionar o cliente ao array de clientes
        this.clientes.push(cliente);
        // Limpar os campos do formulário
        document.getElementById("nomeCliente").value = "";
        document.getElementById("cpfCliente").value = "";
        // Atualizar a lista de cliente
        this.atualizarClientes();
    }

    atualizarClientes() {
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";
        const select = document.getElementById("selectCliente");
        select.innerHTML = "<option value=''>Selecione um Cliente</option>";
        // Percorrer meu array de clientes 
        this.clientes.forEach(cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.getNome();
            lista.appendChild(li);
            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();
            select.appendChild(option);
        })
    }
}

// Instanciar objeto da classe controller
const sistema = new SistemaPedidos();
// Adicionar o evento de click do botão
sistema.cadastrarCliente();
