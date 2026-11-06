// VARIABLES:
var x = 20 // antigua forma de definir ariables, tenia errores y no se usa actualmente
let y = 20 // variable comun
const xy = 20 // constante, no se puede alterar



// PRINT Y F-STRING:
let edad = 21

console.log(`tengo ${edad} anios. el 7 de noviembre cumplire ${edad + 1} anios`)
/*
el print pasa a ser un console.log

a diferencia de un str comun que se encierra entre comillas, este se encierra entre backsticks (``)
y las variables se invocan con signo de peso no solo requiere corchetes, sino tambien un signo de peso
al inicio (${})
*/



// FUNCION:
let nombre = 'pablito';

// metodo 1:
function saludar(nombre) {
    return `hola ${nombre}`; // requiere un return para funcionar
}

// metodo 2 (conocido como arrow function):
const saludar2 = (nombre) => `hola ${nombre}`;
/*
usualmente se guarda en const, ya que no tendria mucho sentido guardar
en un let y arriesgarse a modificar involuntariamente una funcion
*/

/*
el metodo 1 se usa cuando la funcion tiene varias lineas y se necesita encerrar la logica entre llaves.
el metodo 2 se usa cuando la funcion es corta, en ese caso
no requiere llaves y es preferible simplificar la sintaxis
*/



// OBJETO (diccionario):
// es lo mismo que un diccionario de python, tiene algunas diferencias pero son irrelevantes de momento
// metodo 1:
const persona = {
    nombre: 'juan',
    apellido: 'repete',
    edad: 20,
};

// metodo 2 (destrcturing):
const {name, age} = persona; // sinceramente esto es horrible, no lo voy a usar nunca xd

console.log(persona.nombre); // se accede con punto, no con corchetes como en python (persona["nombre"])


// destructuring objetos en la funcion
const destructuring_objetos = ({nombre, edad}) => `mi nombre es ${nombre} y tengo ${edad} anios`;

console.log(destructuring_objetos({nombre: 'noel', edad: 20}));
/*
solo hay que encerrar entre corchetes para aclarar que es una
estructura "clave: valor" tanto en la funcion como en la salida
*/



// MAP:
/*
funciona similar a un bucle For, recorre por elemento, modificando cada uno segun la logica,
la diferencia entre ambos es que el MAP almacena los datos en una lista nueva
*/

let numeros = [1, 2, 3, 4, 5]; // lista de elementos

const dobles = numeros.map((n) => n * 2); // crea una nueva lista de elementos

console.log(dobles);



// FILTER:
// es literalmente filtrar, poner una condicion a una lista de datos y filtrar solo los que cumplan la condicion

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeros_mayores_a_cinco = numeros2.filter((n) => n > 5);

console.log(numeros_mayores_a_cinco);



// REDUCE:
/*
en realidad no se usa mucho, su funcion hasta puede quedar reemplazada por filter y map, pero no esta de mas
entenderlo. es bastante similar a un sum() de Python, solo que mas flexible porque te permite condicionar la
suma filtrando los datos. pero eso es algo que hace filter(), por eso no se usa mucho
*/

const suma = numeros.reduce((acc, n) => acc + n, 0);



// IMPORTAR y EXPORTAR:
/*
a diferencia de Python, no solo se requiere el import, sino que tambien hace falta
exportar desde el otro extremo. hay multiples formas de hacerlo, todas funcionan igual.
*/

// actividades.js
export const funcion_random = console.log('funcion random');

// teorico.js
import funcion_random from './actividades.js';


// importar multiples archivos en una misma linea:
// == // == // == // ==  // == // == // == // == // == // == // ==
// actividades.js
export const funcion_random1 = console.log('funcion random');
export const funcion_random2 = console.log('funcion random');

// teorico.js
import {funcion_random1, funcion_random2} from './actividades.js';
// == // == // == // ==  // == // == // == // == // == // == // ==


// importar sin llaves:
// == // == // == // ==  // == // == // == // == // == // == // ==
// actividades.js
export default funcion_random;

// teorico.js
import funcion_random from './actividades.js';
// == // == // == // ==  // == // == // == // == // == // == // ==



// VALIDAR TIPO DE DATO:
/*
con un = se asigna valor, con dos = se valida que sea lo mismo, con tres = se valida que
sea lo mismo y que tambien que sea del mismo tipo de datos
*/

5 == "5"; // True

5 === "5"; // False



// OPERADORES LOGICOS (traduccion de Python a Javascript):
// Python: and
// Js: &&
/*
el && tiene varias funciones, otra de ellas es que actua como condicional sin else, por ejemplo:
user.isAdmin ? ("acceso concedido") : ("acceso denegado");
user.isAdmin && ("acceso concedido")

como se ve en el ejemplo, lo requiere de un else, si la condicion se cumple, ejecuta,
pero si no se cumple, no ejecuta nada, a diferencia del condicional que si o si
tiene que devolver un else
*/

// Python: or
// Js: ||

// Python: not
// Js: !



// CONDICIONAL RARO:
const condicional_raro = 5 > 10 ? "5 es mayor a 10" : "5 es menor a 10"; // condicional ? True : False




















