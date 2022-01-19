/* clicar na seta pra avançar e esconder as outras imagens,
    A imagem atual começa no 0,
    Assim que for clicado no avançar preciso adicionar +1 ao contador das imagens,
     pra saber qual imagem mostrar agora.
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderimagem(){
    imagensPainel.forEach(Imagem => {
        Imagem.classList.remove('mostrar')
    });
}
function mostrarimagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){
        return;
    }
    imagemAtual++;
    esconderimagem()
    mostrarimagem()
})

setaVoltar.addEventListener('click', function () {
    if(imagemAtual === 0){
        return;
    }
    imagemAtual--;
    esconderimagem()
    mostrarimagem()
})