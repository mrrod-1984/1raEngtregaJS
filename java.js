

// ingreso del nombre
let name = window.prompt("Bienvenido al calculo de tu IMC. \n¿Cual es tu nombre?");

//validacion de nombre solo letras
let isValidName = /^[a-zA-Z\s]+$/.test(name);
while (!isValidName && name !== null) {
    name = window.prompt(`El valor ingresado para el nombre no es válido. \nPor favor, ingresa un nombre válido. \n¿Cuál es tu nombre?`);
    isValidName = /^[a-zA-Z\s]+$/.test(name);
}
alert(`Hola ${name}, \nEmpecemos por ingresar tus datos para calcular tu IMC.`);

// ingreso y validacion de la estatura
let estatura = window.prompt(`${name}, ¿Cual es tu estatura (cm)?`);
while (isNaN(estatura) && estatura !== null) {
    estatura = window.prompt(`El valor ingresado para la estatura no es válido. \nPor favor, ingresa solo números para la estatura. \n¿Cual es tu estatura (cm)? ${name}?`);
}
// ingreso y validacion del peso
let peso  = window.prompt(`${name}, ¿Cual es tu peso (kg)?`);
while (isNaN(peso) && peso !== null) {
    peso = window.prompt(`El valor ingresado para el peso no es válido. \nPor favor, ingresa solo números para el peso. \n¿Cual es tu peso (kg)? ${name}?`);
}

let IMC = peso / (estatura / 100 * estatura / 100);

// resultado en alerta
alert(`${name}, mides ${estatura} y pesas ${peso} kg y tu IMC es: ${IMC.toFixed(1)}. \nAhora veamos tu estado de salud con este IMC.`);

// estimación del resultado del imc

if (IMC < 18.5) {
    alert(`${name}, Tu IMC es ${IMC.toFixed(1)} y estás bajo de peso.`);
} else if (IMC >= 18.5 && IMC <= 24.9) {
    alert(`${name}, Tu IMC es ${IMC.toFixed(1)} y tienes un peso saludable.`);
} else if (IMC >= 25 && IMC <= 29.9) { 
    alert(`${name}, Tu IMC es ${IMC.toFixed(1)} y tienes sobrepeso.`);
} else {
    alert(`${name}, Tu IMC es ${IMC.toFixed(1)} y tienes obesidad`);
} 


