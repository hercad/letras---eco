document.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  setupHeaderScroll();

  const page = document.body.dataset.page;

  if (page === 'inicio') {
    loadBooks(true);
  } else if (page === 'catalogo') {
    loadBooks(false);
  } else if (page === 'contacto') {
    initContactForm();
  }
});

// 1. Inyección de Navegación Global
function renderLayout() {
  const currentPage = document.body.dataset.page || '';

  const headerHTML = `
    <header id="main-header" class="site-header navbar">
      <div class="container header-container nav-container">
        <h1 class="logo-title"><a href="index.html" class="logo">LETRAS---ECO</a></h1>
        <nav>
          <ul class="nav-links main-nav">
            <li><a href="index.html" class="${currentPage === 'inicio' ? 'active' : ''}">Inicio</a></li>
            <li><a href="catalogo.html" class="${currentPage === 'catalogo' ? 'active' : ''}">Catálogo</a></li>
            <li><a href="contacto.html" class="${currentPage === 'contacto' ? 'active' : ''}">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-container">
        <p>&copy; 2026 LETRAS---ECO. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// 2. Elevación del Header Sticky
function setupHeaderScroll() {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

// 3. Carga e Hidratación Dinámica del Catálogo
async function loadBooks(onlyFeatured = false) {
  const container = document.getElementById('books-grid-container');
  if (!container) return;

  try {
    const response = await fetch('data/books.json');
    if (!response.ok) throw new Error('Error al cargar libros');

    const books = await response.json();
    const booksToRender = onlyFeatured ? books.filter(b => b.featured) : books;

    container.innerHTML = booksToRender.map(book => `
      <article class="book-card">
        <div class="book-cover card-media">
          <img src="${book.coverUrl}" alt="${book.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x400?text=Portada'">
        </div>
        <div class="book-details card-body">
          <span class="category">${book.category || 'Literatura'}</span>
          <h4 class="book-title">${book.title}</h4>
          <p class="book-author">Por ${book.author}</p>
          <p class="book-price">$${book.price.toFixed(2)} ${book.currency}</p>
          <a href="contacto.html?book=${encodeURIComponent(book.title)}" class="btn btn-buy btn-amber">Consultar / Pedir</a>
        </div>
      </article>
    `).join('');
  } catch (error) {
    container.innerHTML = `<p class="error-msg">No se pudo cargar la selección de libros. Intenta de nuevo.</p>`;
  }
}

// 4. Inicialización del Formulario y Precarga URL
function initContactForm() {
  const form = document.getElementById('contact-form');
  const asuntoInput = document.getElementById('asunto');

  const urlParams = new URLSearchParams(window.location.search);
  const bookParam = urlParams.get('book');
  if (bookParam && asuntoInput) {
    try {
      asuntoInput.value = `Consulta sobre: ${decodeURIComponent(bookParam)}`;
    } catch (e) {
      console.warn('Error al decodificar parámetro:', e);
    }
  }

  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }
}

// 5. Manejador del Evento Submit con Validaciones
function handleContactSubmit(event) {
  event.preventDefault();
  clearErrors();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const asunto = document.getElementById('asunto').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  let isValid = true;

  if (nombre.length < 3) {
    showError('nombre', 'El nombre debe tener al menos 3 caracteres.');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('email', 'Ingresa un correo electrónico válido.');
    isValid = false;
  }

  if (asunto.length < 5) {
    showError('asunto', 'El asunto debe contener al menos 5 caracteres.');
    isValid = false;
  }

  if (mensaje.length < 10) {
    showError('mensaje', 'El mensaje debe contener al menos 10 caracteres.');
    isValid = false;
  }

  if (!isValid) return;

  const btn = document.getElementById('btn-submit-contact');
  btn.disabled = true;
  btn.innerText = 'Enviando...';

  setTimeout(() => {
    showToast('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    document.getElementById('contact-form').reset();
    btn.disabled = false;
    btn.innerText = 'Enviar Mensaje';
  }, 600);
}

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorSpan = document.getElementById(`error-${fieldId}`);
  if (input) input.classList.add('input-error');
  if (errorSpan) errorSpan.innerText = message;
}

function clearErrors() {
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  document.querySelectorAll('.error-text').forEach(el => el.innerText = '');
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.innerText = message;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hidden');
    }, 4000);
  }
}