
let numeros = [15, 8, 22, 5, 19, 30];

// a. Ordenando o array em ordem crescente
let numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Array ordenado em ordem crescente:", numerosOrdenados);

// b. Filtrando os números maiores que 10 e armazenando-os em um novo array
let numerosMaioresQueDez = numeros.filter(numero => numero > 10);
console.log("Números maiores que 10:", numerosMaioresQueDez);

// c. Somando todos os valores do array usando o método reduce
let somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Soma total dos números:", somaTotal);
