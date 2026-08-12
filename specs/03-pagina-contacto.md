# Spec 03: Página de Contacto y Ajuste de Navegación

## 1. Objetivo
* Corregir el enlace activo "Inicio" en el header de `catalogo.html`.
* Crear una nueva página `contacto.html` con un formulario de contacto de baja fricción, datos institucionales ficticios y un mapa interactivo.

## 2. Requerimientos de Navegación (UX)
* El enlace **"Contacto"** en el header y footer de todas las páginas debe dirigir a `contacto.html`.
* El enlace **"Inicio"** en `catalogo.html` y `contacto.html` debe retornar a `index.html`.

## 3. Requerimientos de la Vista Contacto (`contacto.html`)
* Mantener el Header y Footer con la identidad visual "Papel y Tinta" (`ARCHITECTURE.md`).
* **Sección de Formulario:** Campos para *Nombre Completo*, *Correo Electrónico*, *Asunto* y *Mensaje*. Botón de envío en color Ámbar (`#D97706`).
* **Sección de Datos de Contacto:**
  - Correo: `contacto@letraseco.com`
  - Teléfono: `+57 (601) 555-0192`
  - Dirección: `Calle 72 # 10-34, Bogotá, Colombia`
* **Integración con Google Maps:** Un mapa interactivo (mediante `<iframe>`) mostrando la dirección física ficticia.

## 4. Archivos Afectados
* `specs/03-pagina-contacto.md` (Nuevo)
* `index.html` (Actualización del enlace a `contacto.html`)
* `catalogo.html` (Ajuste de enlace "Inicio" y enlace a `contacto.html`)
* `contacto.html` (Nuevo)
* `styles.css` (Nuevas clases para formulario, mapa y rejilla de contacto)