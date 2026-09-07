import { useNavigate } from "react-router";
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto({ onAgregar, onActualizar, productoEditando }) {
  const navigate = useNavigate();

  const handleAgregar = (nuevoProducto) => {
    onAgregar(nuevoProducto);
    navigate("/inventario");
  };

  const handleActualizar = (productoActualizado) => {
    onActualizar(productoActualizado);
    navigate("/inventario");
  };

  return (
    <div>
      <h1>Gestión de Producto</h1>
      <FormularioProducto
        onAgregar={handleAgregar}
        onActualizar={handleActualizar}
        productoEditando={productoEditando}
      />
    </div>
  );
}

export default NuevoProducto;