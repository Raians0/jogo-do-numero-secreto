let listaDeNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirTextoInicial(){
exibirTextoNaTela ('h1','jogo do numero secreto');
exibirTextoNaTela ('p', 'escolha um numero entre 1 e 100' );
}

exibirTextoInicial();

function verificarChute() {
        let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
         exibirTextoNaTela('p',`${mensagemTentativas}`);
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p','o numero secreto é menor');
               } else { 
                    exibirTextoNaTela('p','o numero secreto é maior') ;
                }
                document.getElementById ('reiniciar').removeAttribute('disabled');
                tentativas++;
                limparCampo();
        } 
        
        console.log (chute == numeroSecreto);
        console.log (chute);
        console.log (numeroSecreto);
    }

function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite);
            listaDeNumerosSorteados = [];

        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido
        }
    }
function limparCampo() {
chute = document.querySelector('input');
chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('diabled',true);
    }