

// ingreso del nombre
let name = window.prompt("¿Cual es tu nombre?");

//validacion de nombre solo letras
let isValidName = /^[a-zA-Z\s]+$/.test(name);
while (!isValidName && name !== null) {
    name = window.prompt(`El valor ingresado para el nombre no es válido. Por favor, ingresa un nombre válido. ¿Cuál es tu nombre?`);
    isValidName = /^[a-zA-Z\s]+$/.test(name);
}
alert(`Hello ${name}, ahora empecemos por ingresar tus datos para calcular tu IMC.`);

// ingreso y validacion de la edad
let edad = window.prompt(`¿Cual es tu edad? ${name}?`);
while (isNaN(edad) && edad !== null) {
    edad = window.prompt(`El valor ingresado para la edad no es válido. Por favor, ingresa solo números para la edad. ¿Cual es tu edad? ${name}?`);
}
// ingreso y validacion de la estatura
let estatura = window.prompt(`¿Cual es tu estatura (cm)? ${name}?`);
while (isNaN(estatura) && estatura !== null) {
    estatura = window.prompt(`El valor ingresado para la estatura no es válido. Por favor, ingresa solo números para la estatura. ¿Cual es tu estatura (cm)? ${name}?`);
}
// ingreso y validacion del peso
let peso  = window.prompt(`¿Cual es tu peso (kg)? ${name}?`);
while (isNaN(peso) && peso !== null) {
    peso = window.prompt(`El valor ingresado para el peso no es válido. Por favor, ingresa solo números para el peso. ¿Cual es tu peso (kg)? ${name}?`);
}

let IMC = peso / (estatura / 100 * estatura / 100);



// resultado en alerta
alert(`Tu nombre es ${name}, tienes ${edad} años, mides ${estatura} y pesas ${peso} kg y tu IMC es ${IMC.toFixed(1)}`);

// insertar el resultado en el html
document.getElementById('info').innerHTML = `Tu nombre es ${name}, tienes ${edad} años, mides ${estatura} y pesas ${peso} kg y tu IMC es ${IMC.toFixed(1)}`;




//Windows.propt() is a method that displays a dialog box that prompts the visitor for input. It returns a string value representing the text entered by the user, or null if the user cancels the dialog box.
//alert() is a method that displays a dialog box with a message and an OK button. It returns undefined.
//windows.confirm() is a method that displays a dialog box with a message and an OK and Cancel button. It returns a boolean value representing the user's choice.