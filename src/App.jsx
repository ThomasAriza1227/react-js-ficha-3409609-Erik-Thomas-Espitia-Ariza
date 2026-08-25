import { useState } from "react";
import ProductoCard from "./components/ProductoCard";
import { productos } from "./data/productos";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const disponibles = productos.filter((producto) => producto.stock > 0);
  const hayAgotados = productos.some((producto) => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    return coincideNombre && coincideCategoria;
  });

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      <div className="resumen">
        <p>
          <strong>Productos disponibles:</strong> {disponibles.length}
        </p>
        <p>
          <strong>Valor del inventario:</strong> $
          {valorInventario.toLocaleString("es-CO")}
        </p>
        <p>
          <strong>¿Hay productos agotados?</strong>{" "}
          {hayAgotados ? "Sí" : "No"}
        </p>
      </div>

      {/* Buscador y filtro */}
      <div className="filtros">
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
      </div>

      <h2>Productos</h2>

      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <section className="productos">
          {productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;