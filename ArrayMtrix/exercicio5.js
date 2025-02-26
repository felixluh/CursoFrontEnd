// Criação do array com os elementos
let veiculos = ["carro", "moto", "bicicleta", "avião", "barco"];

// a. Verificando se o elemento "moto" está presente no array usando o método includes
let temMoto = veiculos.includes("moto");
console.log("O elemento 'moto' está presente no array?", temMoto);

// b. Usando o método indexOf para encontrar a posição de "avião" no array
let posicaoAviao = veiculos.indexOf("avião");
console.log("A posição de 'avião' no array é:", posicaoAviao);
