// Manipulação de String(cadeia de caracteres)

let texto = "Aula de JavaScript";

//contar quantos caracteres tem essa variavel
console.log(texto.length); //18

//MAIUSCULOS e minusculos
console.log(texto.toUpperCase()); //MAIUSCULAS
console.log(texto.toLocaleLowerCase()); //minusculas

//partes da string
console.log(texto.substring(0,4)); //Aula
console.log(texto.slice(-10));//JavaScript

//substituição de partes da string
let texto2 = texto.replace("Java", "Type"); //Aula de TypeScript
console.log(texto2);

//tesoura(trim)
let texto3 =  "  JavaScript  ";
console.log(texto3);
console.log(texto3.trim());

//Separação de String
let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

//Desafio
//contar a quantidade de caracteres
let desafio = "Bom dia com muita alegria";
let solucaodesafio = desafio.replaceAll(" ","");
console.log(desafio);
console.log(solucaodesafio);
console.log(desafio.length);
console.log(solucaodesafio.length);