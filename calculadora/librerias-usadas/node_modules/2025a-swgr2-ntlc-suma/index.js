exports.suma = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        throw new Error('No son numeros validos')
    }
    return numeroUnoCasteado + numeroDosCasteado;
}

exports.resta = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        throw new Error('No son numeros validos')
    }
    return numeroUnoCasteado - numeroDosCasteado;
}

exports.multiplicacion = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        throw new Error('No son numeros validos')
    }
    return numeroUnoCasteado * numeroDosCasteado;
}

exports.division = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        throw new Error('No son numeros validos')
    }
    if(numeroDos == 0){
        throw new Error("No se puede dividir para 0") 
    }
    return numeroUnoCasteado / numeroDosCasteado;
}