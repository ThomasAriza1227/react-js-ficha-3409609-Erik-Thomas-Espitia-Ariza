import { useState } from "react";
import ProductoCard from "./components/ProductoCard";
import FormularioProducto
from "./components/FormularioProducto";
import productosIniciales from "./data/productos";
import "./App.css";


function App() {
  // ===== NUEVO: productos ahora es estado =====
  const [productos, setProductos] = useState(productosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // ... el resto del código se queda igual por ahora
  // ===== Filtro =====
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  // ===== Opción C: Producto económico y premium =====
  const productoEconomico = productos.reduce((masBarato, actual) =>
    actual.precio < masBarato.precio ? actual : masBarato
  );

  const productoPremium = productos.reduce((masCaro, actual) =>
    actual.precio > masCaro.precio ? actual : masCaro
  );

  // ===== Opción F: Limpiar filtros =====
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    
    <div className="App">
      <FormularioProducto />
      <h1>Catálogo de Productos</h1>

      {/* Controles */}
      <div className="controles">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />

        <select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Perifericos">Periféricos</option>
          <option value="Pantallas">Pantallas</option>
          <option value="Audio">Audio</option>
          <option value="Almacenamiento">Almacenamiento</option>
          <option value="Componentes">Componentes</option>
          <option value="Mobiliario">Mobiliario</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) => setSoloDisponibles(evento.target.checked)}
          />
          Solo disponibles
        </label>

        {/* Botón Limpiar filtros (Opción F) */}
        <button className="btn-limpiar" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      {/* Contador */}
      <p className="contador">
        Productos encontrados: {productosFiltrados.length}
      </p>

      {/* Opción C: Producto económico y premium */}
      <div className="destacados">
        <div className="destacado economico">
          <h3>Producto económico</h3>
          <p><strong>{productoEconomico.nombre}</strong></p>
          <p>${productoEconomico.precio.toLocaleString("es-CO")}</p>
        </div>

        <div className="destacado premium">
          <h3>Producto premium</h3>
          <p><strong>{productoPremium.nombre}</strong></p>
          <p>${productoPremium.precio.toLocaleString("es-CO")}</p>
        </div>
      </div>

      {productosFiltrados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}

      <div className="catalogo">
        {productosFiltrados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default App;