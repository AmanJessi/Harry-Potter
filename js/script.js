// Partículas mágicas
function crearParticula() {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.width = p.style.height = Math.random() * 10 + 5 + 'px';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = Math.random() * 20 + 15 + 's';
  document.getElementById('particles').appendChild(p);
  setTimeout(() => p.remove(), 35000);
}
setInterval(crearParticula, 150);

// Hechizos
function lanzarHechizo(h) {
  const e = document.getElementById('efectoHechizo');
  e.style.opacity = 0;
  setTimeout(() => e.style.opacity = 1, 100);
  if (h === 'Lumos') { document.body.style.filter = 'brightness(4)'; e.innerHTML = '¡LUMOS MÁXIMA!'; setTimeout(() => document.body.style.filter = '', 3000); }
  else if (h === 'Nox') { document.body.style.filter = 'brightness(0.05)'; e.innerHTML = '¡NOX!'; setTimeout(() => document.body.style.filter = '', 3000); }
  else if (h === 'Expecto Patronum') { e.innerHTML = '¡EXPECTO PATRONUM!<br>Un ciervo plateado aparece'; e.style.fontSize = '5rem'; }
  else { e.innerHTML = `¡${h.toUpperCase()}!`; }
}

// Quiz del Sombrero Seleccionador
const preguntas = [
  { p: "¿Qué valoras más?", r: ["Valentía", "Ambición", "Inteligencia", "Lealtad"], puntos: [0,1,2,3] },
  { p: "¿Animal favorito?", r: ["León", "Serpiente", "Águila", "Tejón"], puntos: [0,1,2,3] },
  { p: "¿Color preferido?", r: ["Rojo y oro", "Verde y plata", "Azul y bronce", "Amarillo y negro"], puntos: [0,1,2,3] },
  { p: "¿Qué harías con poder ilimitado?", r: ["Proteger a los débiles", "Dominar el mundo", "Descubrir secretos", "Vivir en paz"], puntos: [0,1,2,3] },
  { p: "¿Asignatura favorita?", r: ["Defensa Contra las Artes Oscuras", "Pociones", "Encantamientos", "Herbología"], puntos: [0,1,2,3] },
  { p: "¿Si te atacan?", r: ["Enfrentarlos", "Contraatacar con astucia", "Analizar", "Proteger a amigos"], puntos: [0,1,2,3] },
  { p: "¿Qué prefieres ser?", r: ["Famoso", "Temido", "Admirado", "Querido"], puntos: [0,1,2,3] },
  { p: "¿Lugar favorito?", r: ["Gran Comedor", "Mazmorras", "Torre de Astronomía", "Sala común cálida"], puntos: [0,1,2,3] },
  { p: "¿Qué palabra te define?", r: ["Valiente", "Astuto", "Sabio", "Leal"], puntos: [0,1,2,3] },
  { p: "¿Casa deseada?", r: ["¡Gryffindor!", "Slytherin", "Ravenclaw", "Hufflepuff"], puntos: [0,1,2,3] }
];

let preguntaActual = 0;
let puntos = [0,0,0,0];

function iniciarQuiz() {
  document.getElementById('sombreroImg').style.display = 'none';
  mostrarPregunta();
}

function mostrarPregunta() {
  if (preguntaActual >= preguntas.length) {
    mostrarResultado();
    return;
  }
  const q = preguntas[preguntaActual];
  document.getElementById('quizContainer').innerHTML = `
    <div class="pregunta">
      <h3 class="title-gold mb-4">${preguntaActual + 1}/10 • ${q.p}</h3>
      ${q.r.map((res, i) => `
        <button class="btn-respuesta" onclick="responder(${i})">${res}</button>
      `).join('')}
    </div>
  `;
}

function responder(opcion) {
  puntos[preguntas[preguntaActual].puntos[opcion]] += 2;
  preguntaActual++;
  setTimeout(mostrarPregunta, 600);
}

function mostrarResultado() {
  const max = Math.max(...puntos);
  const casaIndex = puntos.indexOf(max);
  const casas = ["GRYFFINDOR", "SLYTHERIN", "RAVENCLAW", "HUFFLEPUFF"];
  const colores = ["#9e0001", "#1a472a", "#0e1a40", "#ecb939"];
  const animales = ["Lion", "Snake", "Eagle", "Badger"];

  document.getElementById('quizContainer').innerHTML = '';
  document.getElementById('resultadoFinal').innerHTML = `
    <div class="resultado-casa text-center">
      <h1 style="color:${colores[casaIndex]}; font-size:8rem; text-shadow: 0 0 50px gold;">
        ${animales[casaIndex]} ${casas[casaIndex]}!
      </h1>
      <h2 class="text-white mt-4">¡El Sombrero Seleccionador ha hablado!</h2>
      <button class="btn btn-lg mt-5" style="background:var(--gold); color:black; padding:15px 40px;" onclick="location.reload()">
        Volver a intentarlo
      </button>
    </div>
  `;
}