import { useState } from "react";
import ProductoCard from "./components/ProductoCard";
import productos from "./data/productos"; 

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  return (
    <div className="App">
      <h1>Catálogo de Productos</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      {/* Filtro por categoría */}
      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perifericos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
        {/* Agrega aquí las categorías reales que tengas en productos.js */}
      </select>

      {/* Checkbox solo disponibles */}
      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      {/* Contador dinámico */}
      <p>Productos encontrados: {productosFiltrados.length}</p>

      {/* Mensaje cuando no hay resultados */}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      {/* Lista de productos */}
      <div className="catalogo">
        {productosFiltrados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default App;