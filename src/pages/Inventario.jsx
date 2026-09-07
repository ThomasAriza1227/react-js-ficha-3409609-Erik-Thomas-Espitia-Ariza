import { useState } from "react";
import ProductoCard from "../components/ProductoCard";

function Inventario({ productos, eliminarProducto, modificarStock, setProductoEditando }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [filtroEstado, setFiltroEstado] = useState("Todos");   
  const [orden, setOrden] = useState("nombre-az");             

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;

    let coincideEstado = true;
    if (filtroEstado === "Disponibles") {
      coincideEstado = producto.stock > 0;
    } else if (filtroEstado === "Agotados") {
      coincideEstado = producto.stock === 0;
    }

    return coincideNombre && coincideCategoria && coincideEstado;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (orden === "nombre-az") {
      return a.nombre.localeCompare(b.nombre);
    }
    if (orden === "precio-asc") {
      return a.precio - b.precio;
    }
    if (orden === "precio-desc") {
      return b.precio - a.precio;
    }
    if (orden === "stock-asc") {
      return a.stock - b.stock;
    }
    if (orden === "stock-desc") {
      return b.stock - a.stock;
    }
    return 0;
  });

  // Validar que existan productos antes de calcular para evitar errores
  const productoEconomico = productos.length > 0 
    ? productos.reduce((masBarato, actual) => actual.precio < masBarato.precio ? actual : masBarato) 
    : null;

  const productoPremium = productos.length > 0 
    ? productos.reduce((masCaro, actual) => actual.precio > masCaro.precio ? actual : masCaro) 
    : null;

  const productosAgotados = productos.filter((producto) => producto.stock === 0);
  
  const valorInventario = productos.reduce((total, producto) => total + producto.precio * producto.stock, 0);

  return (
    <div>
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
          <p>${valorInventario.toLocaleString("es-CO")}</p>
        </div>
      </div>

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

        {/* Filtro de estado */}
        <select
          value={filtroEstado}
          onChange={(evento) => setFiltroEstado(evento.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Disponibles">Disponibles</option>
          <option value="Agotados">Agotados</option>
        </select>

        {/* Ordenamiento */}
        <select
          value={orden}
          onChange={(evento) => setOrden(evento.target.value)}
        >
          <option value="nombre-az">Nombre A-Z</option>
          <option value="precio-asc">Precio menor a mayor</option>
          <option value="precio-desc">Precio mayor a menor</option>
          <option value="stock-asc">Stock menor a mayor</option>
          <option value="stock-desc">Stock mayor a menor</option>
        </select>

        <button
          className="btn-limpiar"
          onClick={() => {
            setBusqueda("");
            setCategoria("Todas");
            setFiltroEstado("Todos");
            setOrden("nombre-az");
          }}
        >
          Limpiar filtros
        </button>
      </div>

      {/* Contador */}
      <p className="contador">
        Productos encontrados: {productosFiltrados.length}
      </p>

      {/* Productos destacados */}
      {productos.length > 0 && productoEconomico && productoPremium && (
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
      )}

      {/* Mensaje si no hay productos */}
      {productosFiltrados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}

      {/* Catálogo */}
      <div className="catalogo">
        {productosOrdenados.map((producto) => (
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

export default Inventario;