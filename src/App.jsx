import { useState } from "react";
import ProductoCard from "./ProductoCard";

function App() {
  // Aquí van tus productos del día anterior
  const productos = [
    // pega aquí el array de productos que ya tenías
  ];

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
    <div>
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
        {/* Agrega aquí las otras categorías que tenías ayer */}
      </select>

      {/* Solo disponibles */}
      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      {/* Contador */}
      <p>Productos encontrados: {productosFiltrados.length}</p>

      {/* Mensaje sin resultados */}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}

      {/* Lista de productos */}
      {productosFiltrados.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default App;