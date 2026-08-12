# Sistema de Diseño y Patrones UX/UI (Spec Maestro)

## 1. Visión e Identidad Visual
Crear una atmósfera **"Papel y Tinta"** que evoque la sensación de lectura impresa, ofreciendo una experiencia editorial elegante, sobria y de baja fatiga visual.

---

## 2. Tokens de Diseño UI (Look & Feel)

### 2.1 Paleta de Colores
| Token | Código Hex | Uso en la Interfaz |
| :--- | :--- | :--- |
| `--bg-paper` | `#FBF9F5` | Fondo general de la aplicación (Marfil suave) |
| `--bg-card` | `#FFFFFF` | Fondo de tarjetas de producto y paneles elevados |
| `--text-ink` | `#1A2847` | Azul Tinta para encabezados, títulos y navegación |
| `--text-body` | `#1F2937` | Carbón para textos descriptivos y párrafos |
| `--accent-amber` | `#D97706` | Ámbar/Ocre reservado para botones CTA, precios y destacados |
| `--accent-hover` | `#B45309` | Estado hover de botones principales |
| `--border-color` | `#E5E7EB` | Separadores finos y bordes de tarjetas |

### 2.2 Tipografía Híbrida
* **Titulares (`<h1>`, `<h2>`, `<h3>`):** Tipografía Serif (*Playfair Display* / *Merriweather*) para transmitir peso cultural e identidad editorial.
* **Cuerpo e Interfaz (`p`, `span`, `button`, `input`):** Tipografía Sans-Serif (*Inter* / *Plus Jakarta Sans*) para garantizar máxima legibilidad en botones y pantallas pequeñas.

---

## 3. Patrones de Diseño UX Globales

### A. Exploración y Carga Cognitiva Controlada
* **Paginación Deliberada:** 10 a 12 ítems por página con mapa mental claro (`[< Anterior] [1] [2] [Siguiente >]`).
* **Patrón Quick View / Drawer Lateral:** Al interactuar con un libro, un panel se despliega desde la derecha para leer la sinopsis y biografía sin perder la posición en el catálogo.

### B. Tarjeta de Producto (Atomic Card)
* **Relación de Aspecto de Portada:** Proporción fija **3:4** (`object-fit: cover`).
* **Truncado de Título:** Máximo 2 líneas visibles con puntos suspensivos (`line-clamp: 2`).
* **Jerarquía:** Categoría → Título (Serif) → Autor destacado → Precio (`#D97706`) → Botón "Añadir".

### C. Fricción Cero en Móviles
* **Thumb-Zone Optimization:** Elementos clave (búsqueda y carrito) accesibles en la zona cómoda del pulgar en dispositivos móviles.