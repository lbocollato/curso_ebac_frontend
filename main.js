const form = document.getElementById('form-maiormenor');
const campoB = document.getElementById('campob');
const campoA = document.getElementById('campoa');
const containerMensagemDeSucesso = document.querySelector('.acerto');
let validaForm = false;

function validar(campoB,campoA) {
    return campoB>campoA; 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const msgSu = `O Valor de B ${campoB.value} > ${campoA.value} de A.`;
    
    validaForm = validar(campoB.valueAsNumber, campoA.valueAsNumber)
    if(validaForm){
        containerMensagemDeSucesso.innerHTML = msgSu;
        containerMensagemDeSucesso.style.display = 'block';

        campoB.value = '';
        campoA.value = '';
    }else{
        campoA.style.border = '1px solid red';
        document.querySelector('.erro').style.display = 'block';
        containerMensagemDeSucesso.innerHTML = '';
        containerMensagemDeSucesso.style.display = '';
    }
})

campoA.addEventListener('keyup', function(e) {
    validaForm = validar(campoB.valueAsNumber, campoA.valueAsNumber)
    if(!validaForm){
        campoA.style.border = '1px solid red';
        document.querySelector('.erro').style.display = 'block';
        document.querySelector('.acerto') = '';
    } else {
        campoA.style.border = '';
        document.querySelector('.erro').style.display = '';
    }

})

campoB.addEventListener('keyup', function(e) {
    validaForm = validar(campoB.valueAsNumber, campoA.valueAsNumber)
    if(!validaForm){
        campoA.style.border = 'none';
        containerMensagemDeSucesso.innerHTML = 'none';
        containerMensagemDeSucesso.style.display = 'none';
        campoA.value = '';
    } 

})