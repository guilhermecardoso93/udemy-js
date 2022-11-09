const inputTarefa = document.querySelector(".input-tarefa");
const buttonTafera = document.querySelector(".btn-tarefa");
const listaTarefa = document.querySelector(".tarefas");

function criarLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (inputTarefa.value === "") {
      return alert("Por favor coloque uma tarefa.");
    }
    criarTarefa(inputTarefa.value);
    cleanInput();
  }
});

function deleteTarefa(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Apagar";
  deleteButton.setAttribute("class", "apagar");
  deleteButton.setAttribute("title", "Apagar esta Tarefa");
  li.appendChild(deleteButton);
}

function criarTarefa(text) {
  const li = criarLi();
  li.innerText = text;
  listaTarefa.appendChild(li);
  cleanInput();
  deleteTarefa(li);
  salvarTarefa()
}

function cleanInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

buttonTafera.addEventListener("click", function (e) {
  if (inputTarefa.value === "") {
    return alert("Por favor coloque uma tarefa.");
  }

  criarTarefa(inputTarefa.value);
  cleanInput();
});

document.addEventListener('click', function(e) {
  const el = e.target
  if(el.classList.contains('apagar')){
    el.parentElement.remove()
  }
})

function salvarTarefa() {
  const liTarefas = listaTarefa.querySelectorAll('li')

  const listaDeTarefas = []

  for (let tarefa of liTarefas ) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '')
  }
}