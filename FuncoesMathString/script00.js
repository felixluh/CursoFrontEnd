// Funções Matemáticas

//SQRT e POW (Quadrado e potências)
//calcular raiz de 25
console.log(Math.sqrt(25)); //5

//calculara potencia de 7
console.log(Math.pow(7,2)); //7² = 49
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3)); //³√27 = 3

//Funções de arredondamento (round, ceil, floor)
console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

//numeros aleatrorios
console.log(Math.random()); // Retorna um número decimal entre 0 e 1
console.log(Math.random()*1000); // Retorna um número aleatório entre 0 e 999,99


//Valor Absoluto
console.log(Math.abs(-10)); // Retorna 10 (valor absoluto)

//Mínimo e Máximo
console.log(Math.min(1,2,3,4,5,6,7,8,9)); // Retorna 2 (o menor valor da lista)
console.log(Math.max(1,2,3,4,5,6,7,8,9)); // Retorna 9 (o maior valor da lista)