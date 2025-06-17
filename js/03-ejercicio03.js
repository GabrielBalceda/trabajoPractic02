/*
3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.

*/

let textos = [];
let entrada;

while (true) {
  entrada = prompt("Ingresá un texto (Cancelar para finalizar):");
  if (entrada === null) {
    break; // usuario presiona cancelar
  }
  // push guarda eel texto que el usuario ingresa array
  textos.push(entrada);
}

// Conecta el texto con guión
let resultado = textos.join(" - "); //une todos los elementos arr
alert("Texto final: " + resultado);