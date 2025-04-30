// Fecha objetivo
const fechaObjetivo = new Date("Jun 5, 2025 21:00:00").getTime();

// Lógica de la cuenta atrás
const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    clearInterval(intervalo);
    document.getElementById("cuentaAtras").innerHTML = "¡Ya ha comenzado!";
    lanzarConfeti();
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = `${dias}d`;
  document.getElementById("horas").textContent = `${horas}h`;
  document.getElementById("minutos").textContent = `${minutos}m`;
  document.getElementById("segundos").textContent = `${segundos}s`;
}, 1000);

// Si la fecha ya pasó al cargar la página
if (new Date().getTime() > fechaObjetivo) {
  document.getElementById("cuentaAtras").innerHTML = "¡Ya ha comenzado!";
  lanzarConfeti();
}

// Fireworks effect con confetti
function lanzarConfeti() {
  const duration = 5000;
  const animationEnd = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff0000', '#ffffff']
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff0000', '#ffffff']
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}
