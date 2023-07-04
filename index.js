const textAreaReference = document.getElementById('textArea')

const loadButton = document.getElementById('load')
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')

const save = function () {
  const textAreaContent = textAreaReference.value 
  localStorage.setItem('notepad-memory', textAreaContent)
  alert('Contenuto salvato!')
}

const load = function () {
  const memory = localStorage.getItem('notepad-memory')
  if (memory) {
    textAreaReference.value = memory
  } else {
    alert('memoria non trovata!')
  }
}

const reset = function () {
  textAreaReference.value = ''
  localStorage.removeItem('notepad-memory')
  alert('Memoria svuotata!')
}

saveButton.addEventListener('click', save) 
resetButton.addEventListener('click', reset)