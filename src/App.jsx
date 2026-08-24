import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

const resultado = calcularTotal(50000, 3);
console.log(resultado); // 150000q


const aplicarIva = (precio) => {
  return precio * 1.19;
};

const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, stock: 3 },
  { id: 4, nombre: 'Mousepad', precio: 35000, stock: 6 },
  { id: 5, nombre: 'Mando Xbox', precio: 90000, stock: 3 },
  { id: 6, nombre: 'Mando PS5', precio: 90000, stock: 2 },
  { id: 7, nombre: 'Xbox X', precio: 240000, stock: 6 },
  { id: 8, nombre: 'PLay 5', precio:250000, stock: 4 },
  { id: 9, nombre: 'Torre Gamer', precio: 1000000, stock: 3 },
  { id: 10, nombre: 'Celular', precio: 150000, stock: 1 }
];


const nombres = productos.map(producto => {
  return producto.nombre;
});


const disponibles = productos.filter(
  producto => producto.stock > 0
);

const hayAgotados = productos.some(p => p.stock === 0);

const preciosValidos = productos.every(p => p.precio > 0);

const valorInventario = productos.reduce(
  (total, p) => total + p.precio * p.stock,
  0
);

const producto = productos[0];

const actualizado = { ...producto, stock: 8 };

const { nombre, precio, stock } = actualizado;

const estado = stock > 0 ? 'Disponible' : 'Agotado';

console.log(`Producto: ${nombre} - $${precio}`);
console.log(`Estado: ${estado}`);



function App() {
  const nombre = 'Thomas';
  const ficha = 3409609;

  return (
    <main>
      <h1>Hola {nombre}</h1>
      <p>Ficha {ficha}</p>
    </main>
  );
}

export default App;
