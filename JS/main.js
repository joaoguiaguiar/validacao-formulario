import ehUmCPF from "./valida-CPF.js";
import ehMaiorDeIDade from "./valida-idade.js";
import ehUmRG from "./valida-RG.js";
import { tiposDeErro } from "./tipos-de-erro.js";
import { mensagensERRO } from "./tipos-de-erro.js";

const campoForm = document.querySelectorAll('[required]');
const form = document.querySelector('[data-formulario]')

form.addEventListener('submit', (e) => {

    e.preventDefault();
  
    const listaRespostaForm = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        RG: document.getElementById('RG').value,
        CPF: document.getElementById('CPF').value,
        dataNascimento: document.getElementById('dataNascimento').value
    }


    window.location.href = 'about.html'; 

})




campoForm.forEach((campo) => {
    campo.addEventListener('blur', () => verificarCampo(campo));
    //Impedindo mensagens de erro padrao do navegador
    campo.addEventListener('invalid', evento => evento.preventDefault())
});



function verificarCampo(campo) {

    let mensagem = '';

    if (campo.name === 'CPF' && campo.value.length >= 11) {
        ehUmCPF(campo);
    }


    if (campo.name === 'dataNascimento' && campo.value != "") {
        ehMaiorDeIDade(campo)
    }

    if (campo.name === 'RG' && campo.value.length >= 7) {
        ehUmRG(campo)
    }


    tiposDeErro.forEach(erro => {

    // true => Serve pra indicar que o erro esta acontecendo, se tiver exibir mensagem de erro   
    if(campo.validity[erro]){
        mensagem = mensagensERRO[campo.name][erro];
        console.log(mensagem)
    }})


    const componenteErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        componenteErro.textContent = mensagem
    }else{
        componenteErro.textContent = ""
    }





}













