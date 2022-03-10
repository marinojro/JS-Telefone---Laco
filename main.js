const inputTel = document.querySelector('input[type=tel]')
const listaTeclas = document.querySelectorAll('input[type=button]')

for (let c = 0; c < listaTeclas.length; c++) {
    const tecla = listaTeclas[c];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }
}