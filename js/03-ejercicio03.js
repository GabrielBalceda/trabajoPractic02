/*
3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.

*/

let textos = "";

do{
    const letras = prompt('ingresa lo que deseas concatenar:')
    
    if (textos.length === 0)
    {
        textos = letras
    }
    else
    {

        textos = textos +'-'+ letras
    }
}
while (confirm('Preciona aceptar para guardar'))


document.writeln(textos)
