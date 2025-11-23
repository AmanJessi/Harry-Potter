// Partículas mágicas de fondo
function crearParticula() {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.width = p.style.height = Math.random() * 6 + 3 + 'px';
  p.style.left = Math.random() * window.innerWidth + 'px';
  p.style.animationDuration = Math.random() * 12 + 10 + 's';
  document.getElementById('particles').appendChild(p);

  setTimeout(() => p.remove(), 25000);
}
setInterval(crearParticula, 250);

// Hechizos interactivos
function lanzarHechizo(hechizo) {
  const efecto = document.getElementById('efectoHechizo');
  
  if (hechizo === 'Lumos') {
    document.body.style.filter = 'brightness(2)';
    efecto.innerHTML = '¡LUMOS! Luz encendida';
    setTimeout(() => document.body.style.filter = '', 2000);
  }
  else if (hechizo === 'Nox') {
    document.body.style.filter = 'brightness(0.3)';
    efecto.innerHTML = '¡NOX! Oscuridad';
    setTimeout(() => document.body.style.filter = '', 2000);
  }
  else if (hechizo === 'Expecto Patronum') {
    efecto.innerHTML = '¡EXPECTO PATRONUM! Un ciervo plateado';
    efecto.style.fontSize = '3.5rem';
    setTimeout(() => efecto.style.fontSize = '', 3000);
  }
  else if (hechizo === 'Avada Kedavra') {
    efecto.innerHTML = '¡PROHIBIDO! ¡Eso no se dice!';
    efecto.style.color = '#f00';
    setTimeout(() => efecto.style.color = '', 2000);
  }
  else {
    efecto.innerHTML = `¡${hechizo}! Hechizo lanzado`;
  }

  // Pequeño destello
  efecto.style.opacity = '0';
  setTimeout(() => efecto.style.opacity = '1', 100);
}