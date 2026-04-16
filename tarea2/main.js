nombre = prompt("Ingrese su nombre de usuario:")
edad = parseInt(prompt("Ingrese su edad:"))
contrasenia = prompt("Ingrese su contrasenia:") // no tengo enie en este teclado XD

if (nombre == ""){
    console.log("el nombre no puede ser nulo")
} else if (edad < 18){
    console.log("no se permiten menores de edad")
} else if (contrasenia.lenght < 6){
    console.log("la contrasenia no puede tener menos de 6 digitos")
} else{
    console.log("sesion de " + nombre + " iniciada correctamente")
    console.log(nombre + ", sabias que dentro de una decada tu edad sera de " + (edad + 10) + "?" + ' espero que para ese momento sepas elegir una mejor contrasenia que "' + contrasenia + '"' )
}

/* dificultades: no sabia como contar la cantidad de letras de la contrasenia porque no conocia el equivalente a .count()
de python, busque en google y era .lenght, tambien tuve que hacer trampa para corroborar que la edad fuese numerica
porque olvide el nombre del comando parseInt */