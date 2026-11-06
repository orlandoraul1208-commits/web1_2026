// Función compartida: marca un input como válido (cian/verde) o inválido (rojo)
// para dar retroalimentación visual inmediata al usuario.
function marcarInput(el, esValido) {
  if (!el) return;
  el.classList.remove('input-valido', 'input-invalido');
  el.classList.add(esValido ? 'input-valido' : 'input-invalido');
}

// ---------- BOTON "VOLVER ARRIBA" ----------
window.addEventListener('scroll', function () {
  const btn = document.getElementById('btnArriba');
  if (!btn) return;
  if (window.scrollY > 300) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnArriba');
  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Resalta automáticamente en el menú la página en la que estamos parados,
// comparando el href de cada link con la URL actual.
document.addEventListener('DOMContentLoaded', function () {
  const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.menu-principal > li').forEach(function (item) {
    const link = item.querySelector(':scope > a');
    if (link && link.getAttribute('href') === paginaActual) {
      item.classList.add('activo');
    }
  });
});

// Maneja el menú desplegable en pantallas pequeñas (donde no hay "hover")
document.addEventListener('DOMContentLoaded', function () {
  const itemsConSubmenu = document.querySelectorAll('.tiene-submenu > a');

  itemsConSubmenu.forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const padre = link.parentElement;
        const yaAbierto = padre.classList.contains('abierto');

        // Cierra los demás submenús abiertos
        document.querySelectorAll('.tiene-submenu.abierto').forEach(function (li) {
          li.classList.remove('abierto');
        });

        if (!yaAbierto) {
          padre.classList.add('abierto');
        }
      }
    });
  });
});
