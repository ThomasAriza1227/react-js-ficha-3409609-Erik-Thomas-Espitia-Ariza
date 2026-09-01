import { useState, useEffect } from "react";
import ProductoCard from "./components/ProductoCard";
import FormularioProducto from "./components/FormularioProducto";
import productosIniciales from "./data/productos";
import "./App.css";

function App() {
  // Productos como estado
  const [productos, setProductos] = useState(obtenerProductosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null); // ← faltaba esto

  useEffect(() => {
    localStorage.setItem(
      "inventario",
      JSON.stringify(productos)
    );
  }, [productos]);

  function obtenerProductosIniciales() {
    const guardados =
      localStorage.getItem("inventario");
    if (guardados) {
      return JSON.parse(guardados);
    }

    return productosIniciales;
  }

  const actualizarProducto = (actualizado) => {
    const nuevaLista = productos.map((producto) =>
      producto.id === actualizado.id
        ? actualizado
        : producto
    );

    setProductos(nuevaLista);
    setProductoEditando(null);
  };

  // Modificar stock
  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, producto.stock + cambio),
        };
      }

      return producto;
    });

    setProductos(nuevosProductos);
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter(
      (producto) => producto.id !== id
    );

    setProductos(nuevaLista);
  };

  // Agregar producto
  const agregarProducto = (nuevoProducto) => {
    setProductos([
      ...productos,
      nuevoProducto,
    ]);
  };

  // Filtro
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles || producto.stock > 0;

    return (
      coincideNombre &&
      coincideCategoria &&
      coincideStock
    );
  });

  // Producto económico
  const productoEconomico = productos.reduce(
    (masBarato, actual) =>
      actual.precio < masBarato.precio
        ? actual
        : masBarato
  );

  // Producto premium
  const productoPremium = productos.reduce(
    (masCaro, actual) =>
      actual.precio > masCaro.precio
        ? actual
        : masCaro
  );

  // ===== Misión 8: Indicadores =====

  // Productos agotados
  const productosAgotados = productos.filter(
    (producto) => producto.stock === 0
  );

  // Valor total del inventario
  const valorInventario = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

  // Limpiar filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <div className="App">

      {/* Formulario */}
      <FormularioProducto
        onAgregar={agregarProducto}
        onActualizar={actualizarProducto}
        productoEditando={productoEditando}
      />

      <h1>Catálogo de Productos</h1>

      {/* ===== Misión 8: Tablero dinámico ===== */}
      <div className="indicadores">

        <div className="indicador">
          <h3>Productos registrados</h3>
          <p>{productos.length}</p>
        </div>

        <div className="indicador">
          <h3>Productos agotados</h3>
          <p>{productosAgotados.length}</p>
        </div>

        <div className="indicador">
          <h3>Valor total del inventario</h3>
          <p>
            ${valorInventario.toLocaleString("es-CO")}
          </p>
        </div>

      </div>

      {/* Controles */}
      <div className="controles">

        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) =>
            setBusqueda(evento.target.value)
          }
        />

        <select
          value={categoria}
          onChange={(evento) =>
            setCategoria(evento.target.value)
          }
        >
          <option value="Todas">Todas</option>
          <option value="Perifericos">
            Periféricos
          </option>
          <option value="Pantallas">
            Pantallas
          </option>
          <option value="Audio">
            Audio
          </option>
          <option value="Almacenamiento">
            Almacenamiento
          </option>
          <option value="Componentes">
            Componentes
          </option>
          <option value="Mobiliario">
            Mobiliario
          </option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) =>
              setSoloDisponibles(
                evento.target.checked
              )
            }
          />
          Solo disponibles
        </label>

        {/* Botón limpiar filtros */}
        <button
          className="btn-limpiar"
          onClick={limpiarFiltros}
        >
          Limpiar filtros
        </button>

      </div>

      {/* Contador */}
      <p className="contador">
        Productos encontrados:{" "}
        {productosFiltrados.length}
      </p>

      {/* Productos destacados */}
      {productos.length > 0 && (
        <div className="destacados">

          <div className="destacado economico">
            <h3>Producto económico</h3>

            <p>
              <strong>
                {productoEconomico.nombre}
              </strong>
            </p>

            <p>
              $
              {productoEconomico.precio.toLocaleString(
                "es-CO"
              )}
            </p>
          </div>

          <div className="destacado premium">
            <h3>Producto premium</h3>

            <p>
              <strong>
                {productoPremium.nombre}
              </strong>
            </p>

            <p>
              $
              {productoPremium.precio.toLocaleString(
                "es-CO"
              )}
            </p>
          </div>

        </div>
      )}

      {/* Mensaje si no hay productos */}
      {productosFiltrados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}

      {/* Catálogo */}
      <div className="catalogo">

        {productosFiltrados.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={eliminarProducto}
            modificarStock={modificarStock}
            onEditar={setProductoEditando}
          />
        ))}

      </div>

    </div>
  );
}

export default App;