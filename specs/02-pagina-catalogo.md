# Spec 02: Página Deductiva de Catálogo (10 Mejores Libros)

## 1. Objetivo
Separar la vista principal de la vista de catálogo navegable, creando una nueva página `catalogo.html` que albergue la lista de los 10 mejores libros de la historia manteniendo la identidad visual "Papel y Tinta".

## 2. Requerimientos de Navegación (UX)
* El enlace **"Catálogo"** del header en ambas páginas debe dirigir a `catalogo.html`.
* El botón **"Ver Catálogo"** de la sección Hero en `index.html` debe redireccionar a `catalogo.html`.
* El enlace **"Inicio"** en el header de `catalogo.html` debe regresar a `index.html`.

## 3. Requerimientos de la Vista Catálogo (`catalogo.html`)
* Reutilizar el mismo Header (marfil/blanco) y Footer (azul tinta) definidos en `ARCHITECTURE.md`.
* Título de la sección: *"Los 10 Mejores Libros de la Historia"*.
* Grid de 10 tarjetas de libros con proporciones 3:4, autores, precios en tono ámbar y botones de compra.

## 4. Archivos Afectados
* `specs/02-pagina-catalogo.md` (Nuevo)
* `index.html` (Actualización de enlaces)
* `catalogo.html` (Nuevo)
* `styles.css` (Mantenimiento de clases globales)