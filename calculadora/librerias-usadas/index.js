const paqueteOperaciones = require('2025a-swgr2-ntlc-suma');

const respuesta = paqueteOperaciones.suma(1, 2);

console.log('La respuesta es: ', respuesta);

const respuestaResta = paqueteOperaciones.resta(1,8);
console.log('La respuesta es: ', respuestaResta);

const respuestaMult = paqueteOperaciones.multiplicacion(1,8);
console.log('La respuesta es: ', respuestaMult);

const respuestaDiv = paqueteOperaciones.division(369,8);
console.log('La respuesta es: ', respuestaDiv);