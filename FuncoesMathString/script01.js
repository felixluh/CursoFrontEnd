//Funções de Data e Hora

let agora = new Date();
console.log(agora); // Retorna a data e hora atual

console.log(agora.toDateString()); // Retorna a data no formato abreviado (ex: "Wed Feb 07 2025")
console.log(agora.toLocaleDateString()); // Retorna a data formatada conforme o local (ex: "07/02/2025" no Brasil)
console.log(agora.toLocaleTimeString()); // Retorna apenas a hora formatada
