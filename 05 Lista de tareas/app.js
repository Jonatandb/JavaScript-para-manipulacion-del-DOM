const input = document.getElementById('ingresar-tarea')
const boton = document.querySelector('button')
const listaDeTareas = document.getElementById('lista-de-tareas')

function agregarTarea() {
  if (input.value) {
    // Crear tarea
    const nuevaTarea = document.createElement('div')
    nuevaTarea.classList.add('tarea')

    // Texto ingresado por el usuario
    const texto = document.createElement('p')
    texto.innerText = input.value
    nuevaTarea.appendChild(texto)

    // Crear y agregar contenedor de íconos
    let iconos = document.createElement('div')
    iconos.classList.add('iconos')
    nuevaTarea.appendChild(iconos)

    // Íconos
    let completar = document.createElement('i')
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar')
    completar.addEventListener('click', completarTarea)

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
    eliminar.addEventListener('click', eliminarTarea)

    iconos.append(completar, eliminar)

    // Agregar tarea a la lista
    listaDeTareas.appendChild(nuevaTarea)
    input.value = ''
    input.focus()
  } else {
    alert('Por favor ingresa una tarea')
    input.focus()
  }
}

function completarTarea(e) {
  const tarea = e.target.parentNode.parentNode
  tarea.classList.toggle('completada')
}

function eliminarTarea(e) {
  const tarea = e.target.parentNode.parentNode
  tarea.remove()
  input.focus()
}

input.focus()
boton.addEventListener('click', agregarTarea)
input.addEventListener('keydown', e => {
  console.log(e.key)
  if (e.key === 'Enter') {
    agregarTarea()
  }
})
