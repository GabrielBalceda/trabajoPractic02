/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje. 
*/

const edad = prompt('Ingresa tu edad');

if (edad >= 18){
    document.writeln('Ya tienes edad para conducir 👍')
}
else{
    alert('No tienes edad para conducir')
}