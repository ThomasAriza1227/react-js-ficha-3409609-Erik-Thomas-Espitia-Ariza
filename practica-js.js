/*
console.log("JavaScript listo para practicar");

function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

[ ] Crear sumar(a, b).
[ ] Crear restar(a, b).
[ ] Crear multiplicar(a, b).
[ ] Crear dividir(a, b).
[ ] Crear calcularPromedio(nota1, nota2, nota3).



// Crear sumar(a, b).


var a = 231
var b = 545
var c = a + b;
console.log(c);



Crear restar(a, b).


var a = 7773
var b = 5443
var c = a - b;
console.log(c);


Crear multiplicar(a, b).



var a = 73
var b = 54
var c = a * b;
console.log(c);


Crear dividir(a, b).


var a = 73
var b = 5
var c = a / b;
console.log(c);


Crear calcularPromedio(nota1, nota2, nota3).

var a = 2
var b = 4
var c = 5
var d = a + b + c;
var e = d / 3;
console.log(e);

Convertir cuadrado(numero) a arrow function.


const cuadrado = numero => numero * numero;
console.log(cuadrado(5))




const esMayorEdad = edad => edad >= 18;
console.log(esMayorEdad(20)) 


const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(nombreCompleto("Thomas", "Ariza")); 

productos.forEach((producto, indice) => {
console.log(`${indice + 1}. ${producto.nombre }, ${producto.precio}, ${producto.stock}`);
});




const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(
  producto => `${producto.nombre} cuesta $${producto.precio}`
);
console.log(resumenProductos);


// Productos con precio mayor a $100.000
const productosCaros = productos.filter(producto => producto.precio > 100000);
console.log(productosCaros);

const productosRango = productos.filter(
  producto => producto.precio >= 50000 && producto.precio <= 200000
);
console.log(productosRango);


const productosDisponibles = productos.filter(producto => producto.stock > 0);
console.log(productosDisponibles);



const producto5 = productos.find(producto => producto.id === 5);
console.log(producto5);



const buscarProducto = id => productos.find(producto => producto.id === id);
console.log(buscarProducto(3));



// late literal¿Existe algún producto agotado?
const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Hay productos agotados?", hayAgotados);

// ¿Existe algún producto con precio mayor a $1.000.000?
const precioMayorMillon = productos.some(producto => producto.precio > 1000000);
console.log("¿Hay productos mayores a $1.000.000?", precioMayorMillon);

// ¿Todos tienen precio mayor que cero?
const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos tienen precio mayor que cero?", preciosValidos);

// ¿Todos tienen stock mayor o igual que cero?
const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos tienen stock válido?", stockValido);

// Valor total del inventario
const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
console.log("Valor total del inventario:", valorInventario);


*/

const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, stock: 3 },
  { id: 4, nombre: 'Mousepad', precio: 35000, stock: 6 },
  { id: 5, nombre: 'Mando Xbox', precio: 90000, stock: 3 },
  { id: 6, nombre: 'Mando PS5', precio: 90000, stock: 2 },
  { id: 7, nombre: 'Xbox X', precio: 240000, stock: 6 },
  { id: 8, nombre: 'PLay 5', precio:250000, stock: 0 },
  { id: 9, nombre: 'Torre Gamer', precio: 1000000, stock: 3 },
  { id: 10, nombre: 'Celular', precio: 150000, stock: 1 }
];

// 
console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

// Desestructuración
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

// Spread: copia sin modificar el original
const productoActualizado = {
  ...productos[0],
  precio: 60000,
  stock: 8
};

// Operador ternario
const estado = productoActualizado.stock > 0 ? "Disponible" : "Agotado";

// Frase final
console.log(
  `${productoActualizado.nombre} cuesta $${productoActualizado.precio} y está ${estado}.`
);