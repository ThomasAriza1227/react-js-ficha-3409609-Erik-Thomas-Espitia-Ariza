# Tienda React - Ficha 3409609

Aplicación de catálogo de productos creada con React + Vite.

## Qué incluye

- Práctica de JavaScript (funciones, arreglos, map, filter, reduce, etc.)
- Componente `ProductoCard`
- Listado con `map()` y `key`
- Filtro de productos disponibles
- Cálculo de inventario con `reduce()`
- Detección de productos agotados con `some()`

## Taller 3

La aplicación ahora permite:

- Agregar productos
- Validar formularios
- Eliminar productos
- Modificar stock
- Calcular inventario dinámicamente
- Gestionar estado con useState

### Flujo de la aplicación

1. El usuario diligencia el formulario.
2. El formulario valida los datos.
3. Se crea el nuevo producto.
4. Se utiliza onAgregar para enviarlo a App.
5. App actualiza el estado con setProductos.
6. React actualiza automáticamente la interfaz.

### Gestión del inventario

El usuario puede:

- Aumentar el stock.
- Disminuir el stock.
- Eliminar productos.
- Buscar productos.
- Filtrar por categoría.
- Mostrar únicamente productos disponibles.

### Indicadores

El tablero muestra:

- Cantidad de productos registrados.
- Cantidad de productos agotados.
- Valor total del inventario.
