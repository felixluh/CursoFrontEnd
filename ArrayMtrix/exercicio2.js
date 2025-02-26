// Criando um Array com os números de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. Percorre o array e exibe todos os números no console usando um loop for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// b. Usa o método forEach para exibir os números 
numeros.forEach(function(numero) {
    console.log(numero);
})
