//Função para apagar o texto 
function apagaTexto(){
    let textos = document.getElementById("textos");  //pega o elemento pelo id
    textos.innerText = "";                           //cria um texto vazio   
}
//Função para criar um texto
function criarTexto(conteudo){
    let texto = document.createElement("p");
    texto.setAttribute("id","ptotal");
    texto.textContent = conteudo;
    let div = document.getElementById("textos");
    div.appendChild(texto);     //permite colocar o conteudo na div
}

//função para criar apagar o botão
function apagaBotao(){
    let botoes = document.getElementById("botoes");
    botoes.innerText = "";
}

//Função para criar um botão
function criarBotao(botaoTexto, botaoId, botaoFunc){
    let botao = document.createElement("button");
    botao.innerText = botaoTexto;
    botao.setAttribute("id", botaoId);
    botao.setAttribute("onclick", botaoFunc);
    let div = document.getElementById("botoes");
    div.appendChild(botao);
}

//inserindo imagem
function comecaJogo(){
    imagens(corrida01, "corrida01");
}

/*function apagaImg(){
   let img = document.getElementById("img");
   img.innerHTML = "";
}*/


function menu(){
   /* apagaImg();
    imagens(corrida02, "corrida02")*/
    apagaTexto();
    criarTexto("Mas antes escolha seu personagem favorito, baseado em sua memória e intuição, ela certamente pode te ajuda!");
    apagaBotao();
    criarBotao("O cachorro Muttley", "btn1", "fase1()");
    criarBotao(" Penelope Charmosa", "btn1", "fase1()");
    criarBotao("Dick Vigarista", "btn1", "fase1()");

    
}

function fase1(){
    apagaTexto();
    criarTexto("A corrida começou e nos primeiros 200 metros o caminho permaneceu tranquilo, mas logo a frente você encontra dois caminhos a seguir. Na direita você enxerga um caminho arenoso e com poucas arvores secas e galhos pela pista. A esqueda você enxerga um caminho lamacento com muitas árvores, folhas e animais são encontrados pela pista.");
    apagaBotao();
    criarBotao("Direita", "btn1", "fase2D()");
    criarBotao("Esquerda", "btn", "fase2E()");
}

//seguindo pela direita(1)
function fase2D(){
    apagaTexto();
    criarTexto("Boa escolha! O tempo seco e arenoso colaboraram para que suas rodas AT, que são boas para esse tipo de terreno funcionassem perfeitamente." + "Antes você estava em 3º posição mas agora encontra-se na 2º posição, atrás apenas do Barão Vermelho com sua Lata Voadora" + " Agora escolha qual caminho seguir: A frente você percebe que a pista está com bastante água, mas o Barão Vermelho escolheu seguir por esse caminho. A direita tem montanhas e rochas, o que exige que você faça mais curvas.");
    apagaBotao();
    criarBotao("A frente", "btn1", "fase3D()");
    criarBotao("Direita", "btn1", "fase4D()");
}

function fase3D(){
    apagaTexto();
    criarTexto("O Tio Tomás e o Urso Chorão implantaram uma bomba embaixo d'água, antes da corrida começar e o Barão Vermelho não a enxergou. Quando o carro entrou em contato com a bombam o mesmo explodiu pelos ares. Felizmente o Barão não se machucou, ele caiu em uma campo aconchegante. Com a pista cheia de fumaça, a noção de por onde seguir ficou quase que impossível, você agora só enxerga uma curva para a direita e uma para a esquerda, sem saber direito o que cada uma tem. Para qual desses lados você entraria com seu carro?");
    apagaBotao();
    criarBotao("Curva Direita", "btn1", "fase5D()");
    criarBotao("Curva Esquerda", "btn1", "fase6D()");
}

function fase4D(){
    apagaTexto();
    criarTexto("Boa! Nem sempre seguir quem está em primeiro na corrida é a melhor decição a se tomar, a pesar de ter dado mais trabalho, ir pelas montanhas foi a melhor decisão, ao seguir em frente o Barão Vermelho foi eliminado da corrida. Você está no topo da montanha e uma descida e uma subida, ambas com o mesmo aspecto, sem grande diferença. Qual caminho você prefere seguir?");
    apagaBotao();
    criarBotao("A cima", "btn1", "fase7D()");
    criarBotao("A baixo", "btn1", "fase8D()");
}


function fase5D(){   //perde a corrida (direita)
    apagaTexto();
    criarTexto("Eita! Assim que você sai da cortina de fumaça o Sargento Bombarda e seu co-piloto, Soldado Meekley pilotando o Carro Tanque aparecem na sua cola e bombardeiam o seu carro, infelizmente você não consegue voltar para a corrida!");
    criarTexto("Não foi dessa vez, mas você pode tentar quantas vezes quiser. Eu acredito em você!");
    apagaBotao();
    criarBotao("Tente Novamente")
}

function fase6D(){   //ganha a corrida (esquerda)
    apagaTexto();
    criarTexto("Parabéns, você venceu!")
    criarTexto("Mesmo sem enxergar nada pelo excesso de fumaça, você escolheu o caminho certo. Parabéns! Suas escolhas o trouxeram até a vitória, mesmo com toda a probabilidade de dar errado você conseguiu vencer!");
    apagaBotao();
    criarBotao("Jogar novamente");
}

function fase7D(){   //perde a corrida
    apagaTexto();
    criarTexto("Você subiu pensando que poderia ser uma boa idéia, mas pensou alto demais e infelizente a cima só tem um penhasco, cujo a queda causou perda total no seu veículo.");
    criarTexto("Mas não desanime, você pode tentar quantas vezes quiser!")
    apagaBotao();
    criarBotao("Tente novamente");
}

function fase8D(){    //ganha a corrida
    apagaTexto();
    criarTexto("Você escolheu o caminho certo! Assim que você desceu metada da montanha e virou para o único caminho possível, uma curva para a direita, estava ali a linha de chegada!");
    criarTexto("Parabéns! Mesmo com toda a dificuldade você venceu este desafio, você é incrícel mesmo.")
    apagaBotao();
    criarBotao("Jogar novamente");
}


//seguindo pela esquerda(1)
function fase2E (){
    apagaTexto();
    criarTexto("Infelizmente o seu pneu MUD não permite que você seja um dos mais rápidos. Antes estava na 3º posição e agora encontra-se na 5º. Mas não desita, você ainda consegue alcaçar seus adversários! A frente você enxerga que os Irmão Rocha, com seu Carro de Pedra seguem para a direita, onde o caminho é rochoso e desnivelado. Mas este não é o único caminho, a esquerda você observa que a estrada volta a ser uniforma, mas encontra-se enxarcada de água. Por onde você prefere seguir?");
    apagaBotao();
    criarBotao("Equerda", "btn", "fase3E()");
    criarBotao("Direita", "btn", "fase4E()");
}

function fase3E(){
    apagaTexto();
    criarTexto("Boa! Você passou pelo modo turbo, apenas 3 competidores conseguiram passar por ele, agora você se encontra novamente na 3º, é uma vantagem confortável, mas lembre, o seu objetivo é ganhar.");
    criarTexto("O Professor Aéreo com seu Carro Cheio de Truques está indo em direção a curva para a esquerda, e assim que entra nesta curva ele aciona bombas para que você não entre no mesmo sentido que ele. Você tem duas opções: Seguir no mesmo sentido que ele, a esquerda, ou fugir das bombas e ir em direção a direita.")
    apagaBotao();
    criarBotao("Esquerda", "btn", "fase5E()");
    criarBotao("Direita", "btn", "fase6E()")
}

function fase4E(){
    apagaTexto();
    criarTexto("Parace que as coisas complicaram pra você, suas rodas não aguentaram o caminho turbulento e você teve que parar no acostamento para troca-las. Assim que termina de trocar percebe que está em 8º lugar.");
    criarTexto("E é nesse momento que você decide que é a hora certa de usar os poderes do seu carro, você tem 2 opções que só podem ser usadas uma única vez, que são: Voar por 5 minutos ou Modo turbo por 7 minutos. Qual a melhor opção?");
    apagaBotao();
    criarBotao("Modo turbo", "btn", "fase7E()");
    criarBotao("Voar", "btn", "fase8E()");
}

function fase5E(){    //perde a corrida
    apagaTexto();
    criarTexto("Foi difícil pensar com toda essa pressão, não é mesmo? Infelizmente as bombas atingiram seu carro de maneira forte demais e ele parou de funcionar imediatamente.");
    criarTexto("Mas não desista assim tão fácil, tente novamente, acredito no seu potencial!")
    apagaBotao();
    criarBotao("Tente novamente");
}

function fase6E(){   //ganha a corrida
    apagaTexto();
    criarTexto("Você pensa rápido em situações de perigo! Boa escolha, o caminho que o Professor Aéreo estava seguindo não tinha saída, ele acabou batendo em uma montanha e explodindo, parece que a bomba estava programada para ele mesmo!");
    criarTexto("Parabéns por suas decissões, elas te levaram a vitória. Você é um máximo!")
    apagaBotao();
    criarBotao("Jogar novamente");
}

function fase7E(){    //ganha a corrida
    apagaTexto();
    criarTexto("VRUUUUUUUUUUUUUUUUUUUUUUM! Caramba que rápido! Você chegou na linha de chegada mais rápido que todos, parce que esse seu modo turbo é incrível mesmo!");
    criarTexto("E e se essa era a resposta que você queria, SIM! Você venceu a corrida! Você é um máximo!")
    apagaBotao();
    criarBotao("Jogar novamente");
}

function fase8E(){    //perde a corrida
    apagaTexto();
    criarTexto("Infelizmente voar não te ajudou muito, os outros competidores estavam em uma velocidade muito bem mais rápida em relação a sua, mas não desanime, você pode tentar sempre que quiser. Não desista!");
    apagaBotao();
    criarBotao("Tente novamente");
}