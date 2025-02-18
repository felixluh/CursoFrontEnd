// Estrutura De Dados

// condicionais (IfElse/SwitchCase)
//if
var precoProduto = 150;
if (precoProduto >= 100){
    console.log("Valor a pagar: "+(precoProduto*0.9));
} else{
console.log("Valor a pagar: "+(precoProduto));
}

//switch Case (usado quando se tem muitas decisão a ser tomada)
var mes = 2;
switch (mes) {
    case 1:
    console.log("Janeiro");
    break;

    case 2:
    console.log("Fevereiro");
    break;

    case 3:
    console.log("Março")
    break;
    
    default:
        break;
}

// Estrutura de Repetição

//for (Contaveis)
for(let i = 0; i<=100; i++){
    console.log(i);
}

// while (Incontaveis)
var continuar = true; //condição de parada
// a parada acontece quando continuar for fase
var NumeroEscolido = 3;
var contador = 0;
while(continuar){
    contador++;
    let NumeroSorteado = Math.round(Math.random()*10);
    if(NumeroEscolido==NumeroSorteado){
        continuar = false
        console.log("Acertou")
    }
    console.log("Tentativas: "+contador);
}


// Funções (Ação Especifica) podendo ser chamada a qualquer momento dentro do codigo
function ola(nome) { //function return
    return "Olá" +nome;
}
function hello(nome){//function void
    console.log("Hello," +nome);
}
console.log(ola ("luiza"));

hello ("luiza");