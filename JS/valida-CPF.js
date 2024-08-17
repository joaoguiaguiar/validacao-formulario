export default function ehUmCPF(campo) {
    const CPF = campo.value.replace(/\.|-/g, "");

    if (validaNumerosRepetidos(CPF) || !validaPrimeiroDigito(CPF) || !validaSegundoDigito(CPF)) {
        campo.setCustomValidity('O CPF inserido é inválido');
    } else {
        campo.setCustomValidity('');
    }
}

function validaNumerosRepetidos(CPF) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numerosRepetidos.includes(CPF);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    // Corrigido para verificar se o primeiro dígito está correto
    return soma == cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    // Corrigido para verificar se o segundo dígito está correto
    return soma == cpf[10];
}
