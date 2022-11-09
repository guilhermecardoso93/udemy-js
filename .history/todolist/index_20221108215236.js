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
  li.appendChild(deleteButton);
}

function criarTarefa(text) {
  const li = criarLi();
  li.innerText = text;
  listaTarefa.appendChild(li);
  deleteButton();
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
