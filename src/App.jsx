import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router";
import productosIniciales from "./data/productos";
import "./App.css";

import Inicio from "./pages/Inicio";
import Inventario from "./pages/Inventario";
import NuevoProducto from "./pages/NuevoProducto";
import Acerca from "./pages/Acerca";
import NoEncontrado from "./pages/NoEncontrado";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  function obtenerProductosIniciales() {
    const guardados = localStorage.getItem("inventario");
    if (guardados) return JSON.parse(guardados);
    return productosIniciales;
  }

  const [productos, setProductos] = useState(obtenerProductosIniciales);
  const [productoEditando, setProductoEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    localStorage.setItem("inventario", JSON.stringify(productos));
  }, [productos]);

  const actualizarProducto = (actualizado) => {
    const nuevaLista = productos.map((producto) =>
      producto.id === actualizado.id ? actualizado : producto
    );
    setProductos(nuevaLista);
    setProductoEditando(null);
    setMensaje("Producto actualizado correctamente.");
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, stock: Math.max(0, producto.stock + cambio) };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
    setMensaje("Producto eliminado.");
  };

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    setMensaje("Producto agregado correctamente.");
  };

  return (
    <div className="App">
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/inventario">Inventario</NavLink>
        <NavLink to="/nuevo">Nuevo Producto</NavLink>
        <NavLink to="/acerca">Acerca</NavLink>
      </nav>

      {mensaje && <p>{mensaje}</p>}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route 
          path="/inventario" 
          element={
            <Inventario 
              productos={productos} 
              eliminarProducto={eliminarProducto} 
              modificarStock={modificarStock} 
              setProductoEditando={setProductoEditando} 
            />
          } 
        />
        <Route 
          path="/nuevo" 
          element={
            <NuevoProducto 
              onAgregar={agregarProducto} 
              onActualizar={actualizarProducto} 
              productoEditando={productoEditando} 
            />
          } 
        />
        {/* La ruta dinámica se ubica aquí adentro, donde "productos" ya está definido */}
        <Route path="/productos/:id" element={<DetalleProducto productos={productos} />} />
        
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </div>
  );
}

export default App;