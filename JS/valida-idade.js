export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);

    

    // Se não validar idade, o usuário é menor de idade
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário é menor de idade');
    } else {
        campo.setCustomValidity(''); 
    }
   
    console.log(validaIdade(dataNascimento));

    
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

 
    return dataAtual >= dataMais18;
}













