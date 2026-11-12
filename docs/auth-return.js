// This is a static download site, never an OAuth session store.
(() => {
  const hash = new URLSearchParams(location.hash.slice(1));
  const query = new URLSearchParams(location.search);
  const authKeys = ['access_token', 'refresh_token', 'error', 'error_description', 'code'];
  if (!authKeys.some(key => hash.has(key) || query.has(key))) return;
  // Remove credentials before loading other resources or navigating away.
  history.replaceState(null, '', location.pathname);
  document.documentElement.dataset.authReturn = 'true';
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    main.replaceChildren();
    const section = document.createElement('section'); section.className = 'hero';
    const title = document.createElement('h1'); title.textContent = 'Vuelve a la extensión de Halo';
    const message = document.createElement('p');
    message.textContent = 'Google ha vuelto a esta web en lugar de a Chrome. No necesitas descargar ni instalar la aplicación de escritorio. Cierra esta ventana, abre Halo desde su icono e inténtalo de nuevo.';
    const help = document.createElement('a'); help.href = 'help.html'; help.className = 'button'; help.textContent = 'Ayuda con el acceso';
    const detail = document.createElement('p'); detail.className = 'note'; detail.textContent = 'Si vuelve a ocurrir, contacta con soporte indicando «Google vuelve a la web». Esta página no guarda tu sesión.';
    section.append(title, message, help, detail); main.append(section);
  });
})();
