import { useState } from 'react';
import './App.css';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';

function App() {
  const [busqueda, setBusqueda] = useState("");
  
  const [categoria, setCategoria] = useState("Todas");

  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const disponibles = productos.filter(producto => producto.stock > 0);

  const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0
  );

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;
    return coincideNombre && coincideCategoria && coincideStock;
  });

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      <input className="buscador"
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />
      
      <h1 className="filtrotext">Filtrar por categoría</h1>
      <select className="filtro" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Perifericos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
        <option value="Consolas">Consolas</option>
        <option value="Torres">Torres</option>
        <option value="Celulares">Celulares</option>
      </select>

      <br/>
      
      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(e) => setSoloDisponibles(e.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      <p>Productos encontrados: {productosFiltrados.length}</p>

      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <section className="productos">
          {productosFiltrados.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;