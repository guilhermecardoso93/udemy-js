const inputTarefa = document.querySelector(".input-tarefa");
const buttonTafera = document.querySelector(".btn-tarefa");
const listaTarefa = document.querySelector(".tarefas");

buttonTafera.addEventListener('click', function(e) {
  if(inputTarefa.value === '') {
    return
  }
  
  console.log(inputTarefa.value)


})
