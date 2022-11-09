const inputTarefa = document.querySelector(".input-tarefa");
const buttonTafera = document.querySelector(".btn-tarefa");
const listaTarefa = document.querySelector(".tarefas");

function criarTarafa(text) {
  console.log(texto)
}

buttonTafera.addEventListener('click', function(e) {
  if(inputTarefa.value === '') {
    return alert('Por favor coloque uma tarefa.')
  }
  
 criarTarefa(inputTarefa.value)


})
