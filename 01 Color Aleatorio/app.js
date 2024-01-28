// Seleccionar elementos del DOM
const boton = document.querySelector('button')
const color = document.getElementById('color')

function generarColorHexAleatorio() {
  const digitos = '0123456789ABCDEF'
  let colorHex = '#'
  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * 16)
    colorHex += digitos[indiceAleatorio]
  }
  return colorHex
}

boton.addEventListener('click', () => {
  const colorAleatorio = generarColorHexAleatorio()

  // Actualizar el texto:
  color.textContent = colorAleatorio

  // Actualizar el color de fondo:
  document.body.style.backgroundColor = colorAleatorio
})
