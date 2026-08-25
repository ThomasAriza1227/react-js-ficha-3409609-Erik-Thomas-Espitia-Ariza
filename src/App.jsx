import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import { useState } from "react";



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
// dentro de App():
const [busqueda, setBusqueda] = useState("");
const [categoria, setCategoria] = useState("Todas");
const [soloDisponibles, setSoloDisponibles] = useState(false);



const productosFiltrados = productos.filter(producto => {
  const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
  const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
  return coincideNombre && coincideCategoria;
  const coincideStock = !soloDisponibles || producto.stock > 0;
return coincideNombre && coincideCategoria && coincideStock;
});


{productosFiltrados.length === 0
  ? <p>No se encontraron productos.</p>
  : null}


return (
<main className="contenedor">
<h1>Tienda tecnológica</h1>
<p>Productos disponibles: {disponibles.length}</p>
<p>Valor del inventario: ${valorInventario}</p>
<section className="productos">
{productosFiltrados.map(producto => (
  <ProductoCard key={producto.id} producto={producto} />
))}
</section>


<input
  type="text"
  placeholder="Buscar producto..."
  value={busqueda}
  onChange={(evento) => setBusqueda(evento.target.value)}
/>

<label>
  <input
    type="checkbox"
    checked={soloDisponibles}
    onChange={(e) => setSoloDisponibles(e.target.checked)}
  />
  Mostrar únicamente disponibles
</label>

<select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
  <option value="Todas">Todas</option>
  <option value="Perifericos">Periféricos</option>
  <option value="Pantallas">Pantallas</option>
</select>

{productosFiltrados.length === 0
  ? <p>No se encontraron productos.</p>
  : null}

</main>

);
<p>Productos encontrados: {productosFiltrados.length}</p>
{<p>Precio: ${formatearPrecio(precio)}</p>}

}

export default App;
