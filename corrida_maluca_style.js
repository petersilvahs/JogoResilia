/*let corrida02 = "./Corrida Maluca/imagens/corrida_img02";
let corrida03 = "./Corrida Maluca/imagens/corrida_img03";*/

function creatimg(caminhoDaImagem){
    let img = document.createElement("img");
    img.src = caminhoDaImagem;
    return img;
}

function imagens(letimg, id){
    let imgtag = creatimg(letimg);
    imgtag.setAttribute("id", id);

    let divimg = document.getElementById("img"); //função que cria imagem
    divimg.appendChild(imgtag);  
}