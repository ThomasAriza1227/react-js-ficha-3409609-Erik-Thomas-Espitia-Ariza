// ============================================
// RETO 1: Funciones tradicionales
// ============================================

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));
console.log("Promedio:", calcularPromedio(4.5, 3.8, 4.2));

// Diferencia entre console.log() y return:
// console.log() solo muestra un valor en la consola.
// return devuelve el valor para que se pueda usar en otra parte del programa.

// ============================================
// RETO 2: Funciones flecha
// ============================================

const cuadrado = (numero) => numero * numero;
const esMayorEdad = (edad) => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("Cuadrado de 6:", cuadrado(6));
console.log("Es mayor de edad (20):", esMayorEdad(20));
console.log("Nombre completo:", nombreCompleto("Laura", "Gómez"));

// ============================================
// RETO 3: Arreglo de productos (mínimo 10)
// ============================================

const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Perifericos", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 90000, categoria: "Perifericos", stock: 0 },
  { id: 3, nombre: "Monitor", precio: 650000, categoria: "Pantallas", stock: 3 },
  { id: 4, nombre: "Auriculares", precio: 120000, categoria: "Audio", stock: 8 },
  { id: 5, nombre: "Webcam", precio: 180000, categoria: "Perifericos", stock: 0 },
  { id: 6, nombre: "SSD 1TB", precio: 320000, categoria: "Almacenamiento", stock: 4 },
  { id: 7, nombre: "Memoria RAM 16GB", precio: 250000, categoria: "Componentes", stock: 6 },
  { id: 8, nombre: "Silla Gamer", precio: 890000, categoria: "Mobiliario", stock: 2 },
  { id: 9, nombre: "Micrófono USB", precio: 150000, categoria: "Audio", stock: 7 },
  { id: 10, nombre: "Hub USB-C", precio: 75000, categoria: "Perifericos", stock: 12 },
  { id: 11, nombre: "Monitor Curvo 27\"", precio: 1100000, categoria: "Pantallas", stock: 1 },
  { id: 12, nombre: "Teclado Mecánico RGB", precio: 280000, categoria: "Perifericos", stock: 0 },
];

// ============================================
// RETO 4: forEach()
// ============================================

console.log("\n--- Lista de productos ---");
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

// ============================================
// RETO 5: map()
// ============================================

const nombres = productos.map((producto) => producto.nombre);
const preciosConIva = productos.map((producto) => producto.precio * 1.19);
const nombresMayuscula = productos.map((producto) => producto.nombre.toUpperCase());
const resumenProductos = productos.map(
  (producto) => `${producto.nombre} cuesta $${producto.precio}`
);

console.log("\nNombres:", nombres);
console.log("Precios con IVA:", preciosConIva);
console.log("Nombres mayúscula:", nombresMayuscula);
console.log("Resumen:", resumenProductos);

// ============================================
// RETO 6: filter() y find()
// ============================================

const caros = productos.filter((producto) => producto.precio > 100000);
const rangoMedio = productos.filter(
  (producto) => producto.precio >= 50000 && producto.precio <= 200000
);
const soloPerifericos = productos.filter(
  (producto) => producto.categoria === "Perifericos"
);
const producto5 = productos.find((producto) => producto.id === 5);

function buscarProducto(id) {
  return productos.find((producto) => producto.id === id);
}

console.log("\nProductos > $100.000:", caros);
console.log("Productos entre $50.000 y $200.000:", rangoMedio);
console.log("Solo Periféricos:", soloPerifericos);
console.log("Producto id 5:", producto5);
console.log("Buscar id 8:", buscarProducto(8));

// ============================================
// RETO 7: some(), every() y reduce()
// ============================================

const hayAgotados = productos.some((producto) => producto.stock === 0);
const hayMuyCaro = productos.some((producto) => producto.precio > 1000000);
const preciosValidos = productos.every((producto) => producto.precio > 0);
const stockValido = productos.every((producto) => producto.stock >= 0);
const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);

console.log("\n¿Hay productos agotados?", hayAgotados);
console.log("¿Hay producto > $1.000.000?", hayMuyCaro);
console.log("¿Todos tienen precio > 0?", preciosValidos);
console.log("¿Todos tienen stock >= 0?", stockValido);
console.log("Valor total del inventario: $", valorInventario);

// ============================================
// RETO 8: JavaScript moderno
// ============================================

const productoCopia = {
  ...productos[0],
  precio: 55000,
  stock: 10,
};

const estado = productoCopia.stock > 0 ? "Disponible" : "Agotado";
console.log(
  `\nEl producto ${productoCopia.nombre} ahora cuesta $${productoCopia.precio} y está ${estado}`
);