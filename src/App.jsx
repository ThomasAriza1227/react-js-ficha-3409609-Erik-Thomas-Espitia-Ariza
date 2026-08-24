import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';



function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

const resultado = calcularTotal(50000, 3);
console.log(resultado); // 150000q


const aplicarIva = (precio) => {
  return precio * 1.19;
};


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
const disponibles = productos.filter(producto => producto.stock > 0);
const valorInventario = productos.reduce(
(total, producto) => total + producto.precio * producto.stock,
0
);
return (
<main className="contenedor">
<h1>Tienda tecnológica</h1>
<p>Productos disponibles: {disponibles.length}</p>
<p>Valor del inventario: ${valorInventario}</p>
<section className="productos">
{productos.map(producto => (
<ProductoCard
key={producto.id}
producto={producto}
/>
))}
</section>
</main>
);
}

export default App;
