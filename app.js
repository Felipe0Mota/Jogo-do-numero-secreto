let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
responsiveVoice.setDefaultRate(1.1);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto);
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();
document.getElementById("chutar").removeAttribute("disabled");

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Você Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descubriu o Número Secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("chutar").setAttribute("disabled", true);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", `O Número Secreto é menor que ${chute}`);
    } else {
      exibirTextoNaTela("p", `O Número Secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeNaLista = listaNumeroSorteado.length;

  if (quantidadeNaLista == numeroLimite - 3) {
    listaNumeroSorteado = [];
  }
  if (listaNumeroSorteado.includes(numeroEscolhido)) {
    //.includes verifica se o valor já existe na lista
    return gerarNumAleatorio();
  } else {
    listaNumeroSorteado.push(numeroEscolhido); // .push adiciona o valor ao final da lista
    console.log(listaNumeroSorteado);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumAleatorio();
  tentativas = 1;

  exibirMensagemInicial();
  limparCampo();

  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.getElementById("chutar").removeAttribute("disabled");
}

//ADICIONAR FUNCIONALIDADE TECLA ENTER NA LINHA 25 HTML
