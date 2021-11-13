function adicionar() {
  var tarefa = document.getElementById("inputTarefa").value;
  var iconeTrash = '<i class="fas fa-trash"></i>';

  if (tarefa != "") {
    var listItem =
      "<li><input type='checkbox'><span>" +
      tarefa +
      "</span> <button class='trash' onclick='remover()'>" +
      iconeTrash +
      "</button></li>";

    var lista = document.getElementById("uList");

    lista.insertAdjacentHTML("beforeend", listItem);

    var linhas = document.getElementsByClassName("trash");

    //Adiciona Evento aos Botões 
    for (var i = 0; i < linhas.length; i++) {
      linhas[i].addEventListener("click", removerItem);
    }

    document.getElementById("inputTarefa").value = null;
  } else {
    window.alert("Insira uma tarefa!");
  }
}

//Remove Elemento da Lista de Tarefas
function removerItem(e) {
  e.preventDefault();
  var li = this.parentNode;
  li.parentNode.removeChild(li);
}
