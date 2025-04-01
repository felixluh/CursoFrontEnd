// galeria de imagens dinâmicas -> DOM

let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("addImagem");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

// vetor das imagens
let imagens = [];

//adicionar imagem no vetor
btnAdd.addEventListener("click", ()=>{
    let imagemUrl = uploadInput.value.trim();
    if(imagemUrl ==="") return;
    imagens.push(imagemUrl);
    atualizarGaleria();
    atualizarCarrossel();
    uploadInput.value = ""; //limpa o campo do input
});

//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML = ""; //limpa a galeria
    imagens.forEach(
        (imagem,index) => {
            let div = document.createElement("div");
            div.classList.add("imagemContainer");
            let img = document.createElement("img");
            img.src = imagem;
            let btnRemove = document.createElement("button");
            btnRemove.innerText = "X";
            btnRemove.classList.add("remove");
            btnRemove.addEventListener("click",()=>{//remover a imagem do vetor
                imagens.splice(index,1);
                atualizarGaleria();//recursão
                atualizarCarrossel();
            });
            div.appendChild(img);
            div.appendChild(btnRemove);
            galeria.appendChild(div);
        }
    );
}

//atualizar Carrossel
function atualizarCarrossel(){
    carrossel.innerHTML = ""; //limpa o carrossel
    imagens.forEach( imagem => {
        let img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%";//Garante que a imagem ocule o espaço correto
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%`;
    iniciarCarrossel(); //função para iniciar o carrossel
}

//fuction iniciarCarrossel()
function iniciarCarrossel(){
    let index = 0;
    setInterval(()=>{
        index = (index+1) % imagens.length;
        carrossel.style.transition = `tranform ${(1+imagens.length)/imagens.length}s ease-in-out`;//transição entre as imagens
        carrossel.style.transform = `translateX(-${index*100/imagens.length}%)`;//move corretamente o carrossel
    },2000);
}



