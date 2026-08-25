function ProductoCard({ producto }) {
const {
nombre,

precio,
categoria,
stock
} = producto;
const estado =
stock > 0
? "Disponible"
: "Agotado";
const mostrarProducto = () => {
alert(`Seleccionaste ${nombre}`);
};
return (
<article className="producto-card">
<h2>{nombre}</h2>
<p>Categoría: {categoria}</p>
<p>Precio: ${precio}</p>
<p>Stock: {stock}</p>
<strong>{estado}</strong>
<br />
<button onClick={mostrarProducto}>
Ver producto
</button>
</article>
);

const formatearPrecio = precio => precio.toLocaleString("es-CO");

}

export default ProductoCard;