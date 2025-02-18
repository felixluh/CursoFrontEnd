//calculadora Simples em JavaScript
var prompt = require("prompt-sync")();

//Funções de calculo

function soma(a, b){
   return a+b;
}
//subtração
function sub(a, b){
    return (a-b);
}
//multiplicação
function multi(a,b){
    return(a*b);
}
//Divisão
function div(a,b){
    return(a/b);
}

//menu
function menu(){
    let operacao;
    let numero1;
    let numero2;
    let resultado;
    console.log("====Calculadora Simples====");
    console.log("=Escolha a Operação Desejada: =");
    console.log("| 1. Soma                        |");
    console.log("| 2. Subtração                   |");
    console.log("| 3. Multiplicação               |");
    console.log("| 4. Divisão                     |");
    console.log("==================================");
    operacao = prompt();
    numero1 = Number(prompt ("Informe o numero 1: "));
    numero2 = Number(prompt ("Informe o numero 2: "));
    switch (operacao) {
        case "1":
           resultado = soma(numero1,numero2);
            break;
        case "2":
            resultado = sub(numero1,numero2)
            break;
        case "3":
            resultado = mult(numero1,numero2);
            break;
        case "4":
            if (numero2==0){
                console.log("Não dividiras por 0");
                resultado = null
            }else{
            resultado = div(numero1,numero2);
            }
            break;
        default:
            console.log("Operação Invalida")
            resultado = null
            break;
    }//Fim do swhit
    console.log("O resultado é "+resultado);
}

//aplicar a função menu

var continuar = true;
while (continuar) {
    menu();
    let Escolha = prompt("1. Continuar // 2. Sair");
    if (Escolha == 2) {
        continuar = false;
        console.log ("Bey Bey...");
    }
}