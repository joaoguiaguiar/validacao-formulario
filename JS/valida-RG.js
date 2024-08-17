export default function ehUmRG(campo) {
    
    
    const RG = campo.value.replace(/\D/g, ""); 


    if (!validaFormatoRG(RG) || numerosRepetidos(RG)) {
        campo.setCustomValidity('O RG inserido é inválido');
    } else {
        campo.setCustomValidity('');
    }
}

function validaFormatoRG(rg) {
    return rg.length >= 9 && rg.length <= 11;
}

function numerosRepetidos(rg) {
    const numerosRepetidos = [
        '000000000',
        '111111111',
        '222222222',
        '333333333',
        '444444444',
        '555555555',
        '666666666',
        '777777777',
        '888888888',
        '999999999'
    ];

    return numerosRepetidos.includes(rg);
}
