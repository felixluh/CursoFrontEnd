//declaração de um array "[]"
let array = []; //array dinâmico
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "caixa", "Meia"];
let arrayMisto = [1, "Jose",true];

//tamanho de um array
console.log(arrayNumeros.length); //9

//acessar o elemento do array (index)
console.log(arrayTexto[1]); //posição-1

//adicionar elementos em um array
// no comço (unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto);
//  no fim (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

//trocar um valor
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

//Remover Elementos
//no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);

//no final(pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um array (laço de repeição) 
//percorrer o array de numeros
for(let i =0;i<arrayNumeros.length;i++){
    console.log("Indece["+i+"]="+[arrayNumeros[i]]);
}

//forEach
arrayTexto.forEach(elemento => {
    console.log(elemento)
});

//metodos uteis em array
//indexOff

console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elemento inexistente)

//Splace (remover elemento da posição)
arrayMisto.splice(2,1);
// ["a", "b", "c", "d", ...];
console.log(arrayMisto);

//Operações avançadas de Arrays
// map - novos valores
let valores = [10, 20, 30, 40, 50]
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter -comparação
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);

//Desafio (filtro x<35) && (x*3)
let valoresDesafio = valores.filter(x=>x<35).map(x=>x*3)

//reduce ([] -> let x)
let soma = valores.reduce((x,y) => x+y);
console.log(soma);

//sort (organizar)
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log (aleatorio);
let ordenado = aleatorio.sort();
console.log (ordenado);

