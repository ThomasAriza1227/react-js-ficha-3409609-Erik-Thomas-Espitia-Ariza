function ProductoCard({ producto, onEliminar, modificarStock, onEditar }) {
  const { nombre, precio, categoria, stock } = producto;

  const estado = stock > 0 ? "Disponible" : "Agotado";

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <article className="producto-card">
      <h2>{nombre}</h2>

      <p>Categoría: {categoria}</p>

      <p>Precio: ${formatearPrecio(precio)}</p>

      <p>Stock: {stock}</p>

      <strong className={stock > 0 ? "disponible" : "agotado"}>
        {estado}
      </strong>

      <br />

      <button
        onClick={mostrarProducto}
        disabled={stock === 0}
      >
        {stock > 0 ? "Ver producto" : "Agotado"}
      </button>

      <br />

      <button onClick={() => onEditar(producto)}>
        Editar
      </button>

      <br />

      {/* Botones para modificar el stock */}
      <button
        onClick={() => modificarStock(producto.id, 1)}
      >
        + Stock
      </button>
      <br />
      <button
        onClick={() => modificarStock(producto.id, -1)}
        disabled={stock === 0}
      >
        - Stock
      </button>

      <br />

      {/* Botón eliminar */}
      <button
        onClick={() => onEliminar(producto.id)}
      >
        Eliminar
      </button>
    </article>
  );
}

export default ProductoCard;