/*
2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
“Introduce un número válido”.

 */

let calificacion = parseInt(prompt('Ingrese un numero del 0 a 10'));

if (calificacion >= 0 && calificacion <= 2)
{
    alert('Muy deficiente')
}

if (calificacion >= 3 && calificacion <= 4)
{
    alert('Insuficiente')
}

if (calificacion >= 5 && calificacion <= 6)
{
    alert('Suficiente')
}

if (calificacion === 7)
{
    alert('Bien')
}

if (calificacion >= 8 && calificacion <= 9)
{
    alert('Notable')
}

if (calificacion === 10)
{
    alert('Sobresaliente')
}

if (calificacion < 0 || calificacion > 10)
{
    alert('Numero erróneo')
}

if (isNaN(calificacion))
{
    alert('Introduce un numero valido')
}