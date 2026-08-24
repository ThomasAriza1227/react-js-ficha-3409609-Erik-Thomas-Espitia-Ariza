function ProductoCard({ producto }) {
  return (
    <article>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
    </article>
  );
}

export default ProductoCard;
