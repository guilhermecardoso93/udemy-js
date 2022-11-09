const inputTarefa = document.querySelector(".input-tarefa");
const buttonTafera = document.querySelector(".btn-tarefa");
const listaTarefa = document.querySelector(".tarefas");

function criarLi() {
  const tarefaLi = document.createElement("li");
  return tarefaLi;
}

function criarTarefa(text) {
  const li = criarLi();
  li.innerText = text
  listaTarefa.appendChild(li)
}

buttonTafera.addEventListener("click", function (e) {
  if (inputTarefa.value === "") {
    return alert("Por favor coloque uma tarefa.");
  }

  criarTarefa(inputTarefa.value);
});
