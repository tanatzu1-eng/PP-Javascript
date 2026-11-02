// 1/30:
console.log('actividades 1/30:')

// actividad 1 =
console.log('')
console.log('actividad 1 =')

const doble_edad = (x) => console.log(`el doble de tu edad es ${x * 2}`)

doble_edad(30)


// actividad 2 =
console.log('')
console.log('actividad 2 =')

const presentacion = (nombre, lenguaje) => console.log(`hola, soy ${nombre} y aprendo ${lenguaje}`)

presentacion('Ana', 'React')


// actividad 3 =
console.log('')
console.log('actividad 3 =')

const calcularTotal = (precio, cantidad) => {
  const subtotal = precio * cantidad;
  return subtotal * 1.21;
};

const calcularTotal2 = (precio, cantidad) => precio * cantidad;

console.log(calcularTotal2(20, 10))



// 2/30:
console.log('')
console.log('-----------------------------------------------------------------------------------------------')
console.log('actividades 2/30:')

// actividad 1 =
console.log('')
console.log('actividad 1 =')

const producto = {nombre: 'caca', precio: 230923027, stock: 23612938};

const {nombre, precio} = producto;

console.log(nombre, precio);


// actividad 2 =
console.log('')
console.log('actividad 2 =')

let numeros = [10, 20, 30]
let [primero, segundo, tercero] = numeros

console.log(primero, tercero)


// actividad 3 =
console.log('')
console.log('actividad 3 =')

const describir = ({nombre, precio}) => `la ${nombre} cuesta ${precio}`

console.log(describir({nombre: 'mierda de burro', precio: 2031287361823}))



// 3/30:
console.log('')
console.log('-----------------------------------------------------------------------------------------------')
console.log('actividades 3/30:')


// actividad 1 =
console.log('')
console.log('actividad 1 =')

const numeros2 = [5, 12, 8, 130, 44]

const numeros_x_3 = numeros2.map((n) => n * 3)

console.log(numeros_x_3)


// actividad 2 =
console.log('')
console.log('actividad 2 =')

const mayores_a_10 = numeros2.filter((n) => n > 10)

console.log(mayores_a_10)


// actividad 3 =
console.log('')
console.log('actividad 3 =')

const suma = numeros2.reduce((acc, n) => acc + n, 0)

console.log(suma)


// actividad 4 =
console.log('')
console.log('actividad 4 =')

const productos = [{nombre: 'producto1', precio: 100}, {nombre: 'producto2', precio: 110}, {nombre: 'producto3', precio: 90}];

const productos_filtrados = productos.filter((p) => p.precio < 100).map((n) => n.nombre);

console.log(productos_filtrados)



// 4/30:
console.log('')
console.log('-----------------------------------------------------------------------------------------------')
console.log('actividades 4/30:')


// actividad 1 =
console.log('')
console.log('actividad 1 =')


// actividad 2 =
console.log('')
console.log('actividad 2 =')


// actividad 3 =
console.log('')
console.log('actividad 3 =')