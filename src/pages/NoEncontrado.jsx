import { NavLink } from "react-router";

function NoEncontrado() {
  return (
    <section>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la ruta a la que intentas acceder no existe.</p>
      <NavLink to="/">Volver a Inicio</NavLink>
    </section>
  );
}

export default NoEncontrado;