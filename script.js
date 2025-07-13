
function toggleCursada(id) {
  const el = document.getElementById(id);
  el.classList.toggle('cursada');
  updateDisponibles();
}

function updateDisponibles() {
  const materias = document.querySelectorAll('.materia');
  materias.forEach(m => {
    if (m.classList.contains('cursada')) return;
    const prereq = m.dataset.prereq;
    if (!prereq) return;
    const requisitos = prereq.split(',');
    const cumplidos = requisitos.every(id => document.getElementById(id)?.classList.contains('cursada'));
    if (cumplidos) {
      m.classList.add('disponible');
    } else {
      m.classList.remove('disponible');
    }
  });
}

window.onload = updateDisponibles;
