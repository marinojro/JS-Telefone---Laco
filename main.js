const inputTel = document.querySelector('input[type=tel]')
const listaTeclas = document.querySelectorAll('input[type=button]')

for (let c = 0; c < listaTeclas.length; c++) {
    const tecla = listaTeclas[c];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }


    //Para utiliziar verificar todos os parâmetros do evento, basta inserir console.log('evento'). Ao clicar na tecla irá mostar no console do navegador todas as propriedades da tecla corresponte, inclusive o 'code:' utilizado aqui.
    //O nome do evento é opcional, os mais utilizados são 'e' ou 'event'.
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}