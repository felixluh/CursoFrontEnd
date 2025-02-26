// Criação do Array com as palavras
const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

// a. Usando o método join para transformar o array em uma frase 
const frase = palavras.join(" ");
console.log("Frase com join: " + frase);

// b. Usando o método splice para adicionar a palavra "muito"
palavras.splice(2, 0, "muito"); // Adicionar a palavra "muito" na posição 2
const novaFrase = palavras.join(" ");
console.log("Frase após splice: " + novaFrase);
