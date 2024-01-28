const cita = document.getElementById('cita')
const autor = document.getElementById('autor')
const boton = document.getElementById('boton-cambiar-cita')
function generarEnteroAleatorio(min, max) {
  // Sin incluir max en los valores posibles
  return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita() {
  const indiceAleatorio = generarEnteroAleatorio(0, citas.length)
  cita.innerText = `"${citas[indiceAleatorio].texto}"`
  autor.innerText = citas[indiceAleatorio].autor
}

cambiarCita()

boton.addEventListener('click', cambiarCita)