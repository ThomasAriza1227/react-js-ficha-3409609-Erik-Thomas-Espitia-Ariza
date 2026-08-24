function ProductoCard({ producto }) {
  const estado = producto.stock > 0 ? "Disponible" : "Agotado";

  return (
    <article className="producto-card">
      <h2>{producto.nombre}</h2>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio.toLocaleString("es-CO")}</p>
      <p>Stock: {producto.stock}</p>
      <strong className={producto.stock > 0 ? "disponible" : "agotado"}>
        {estado}
      </strong>
    </article>
  );
}

export default ProductoCard;