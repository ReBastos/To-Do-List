var tarefasLocal = [];

//Restaura Lista ao Recarregar Página
var restaurarLocal = JSON.parse(localStorage.getItem("tarefa"));
var restaurarConcluido = JSON.parse(localStorage.getItem("concluido"));
for (var j = 0; j < restaurarLocal.length; j++) {
  console.log(restaurarConcluido[j]);
  if (restaurarConcluido[j] == true) {
    var iconeTrash = '<i class="fas fa-trash"></i>';
    var listItem =
      "<li><input type='checkbox' class='concluido' checked><span class='texto'><strike>" +
      restaurarLocal[j] +
      "</strike></span> <button class='trash'>" +
      iconeTrash +
      "</button></li>";

    var lista = document.getElementById("uList");

    lista.insertAdjacentHTML("beforeend", listItem);
  } else {
    var iconeTrash = '<i class="fas fa-trash"></i>';
    var listItem =
      "<li><input type='checkbox' class='concluido'><span class='texto'>" +
      restaurarLocal[j] +
      "</span> <button class='trash'>" +
      iconeTrash +
      "</button></li>";

    var lista = document.getElementById("uList");

    lista.insertAdjacentHTML("beforeend", listItem);
  }

  //Adiciona Evento aos Botões
  var linhas = document.getElementsByClassName("trash");
  for (var i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener("click", removerItem);
  }
  var check = document.getElementsByClassName("concluido");

  //Adiciona Evento aos CheckBoxes
  for (var i = 0; i < check.length; i++) {
    check[i].addEventListener("click", concluido);
  }

  armazenamentoLocal();

  document.getElementById("inputTarefa").value = null;
}

//Adicionar Tarefa
function adicionar() {
  var tarefa = document.getElementById("inputTarefa").value;
  var iconeTrash = '<i class="fas fa-trash"></i>';

  if (tarefa != "") {
    var listItem =
      "<li><input type='checkbox' class='concluido'><span class='texto'>" +
      tarefa +
      "</span> <button class='trash'>" +
      iconeTrash +
      "</button></li>";

    var lista = document.getElementById("uList");

    lista.insertAdjacentHTML("beforeend", listItem);

    var linhas = document.getElementsByClassName("trash");

    //Adiciona Evento aos Botões
    for (var i = 0; i < linhas.length; i++) {
      linhas[i].addEventListener("click", removerItem);
    }
    var check = document.getElementsByClassName("concluido");

    //Adiciona Evento aos CheckBoxes
    for (var i = 0; i < check.length; i++) {
      check[i].addEventListener("click", concluido);
    }

    armazenamentoLocal();
    document.getElementById("inputTarefa").value = null;
  } else {
    window.alert("Insira uma tarefa!");
  }
}

//Remove Elemento da Lista de Tarefas
function removerItem() {
  var confirmacao = confirm("Deseja excluir esse item da lista?");
  if (confirmacao == true) {
    var li = this.parentNode;
    li.parentNode.removeChild(li);
    armazenamentoLocal();
  }
}

//Riscar Elementos da Lista
function concluido() {
  if (this.checked) {
    var li = this.parentNode;
    var tarefaConcluida = li
      .getElementsByClassName("texto")[0]
      .textContent.strike();
    li.getElementsByClassName("texto")[0].textContent = null;
    li.getElementsByClassName("texto")[0].insertAdjacentHTML(
      "beforeend",
      tarefaConcluida
    );
    armazenamentoConcluido();
  } else {
    var li = this.parentNode;
    var tarefaConcluida = li.getElementsByClassName("texto")[0].textContent;
    li.getElementsByClassName("texto")[0].textContent = null;
    li.getElementsByClassName("texto")[0].insertAdjacentHTML(
      "beforeend",
      tarefaConcluida
    );
    armazenamentoConcluido();
  }
}

//Atualiza Local Storage
function armazenamentoLocal() {
  //Atualiza Tarefas
  var span = document.getElementsByClassName("texto");
  var arraySpan = [];
  for (var i = 0; i < span.length; i++) {
    arraySpan[i] = span[i].textContent;
  }
  var spanStr = JSON.stringify(arraySpan);
  localStorage.setItem("tarefa", spanStr);
  armazenamentoConcluido();
}

function armazenamentoConcluido() {
  //Atualiza Tarefas Concluidas
  var check = document.getElementsByClassName("concluido");
  var arrayCheck = [];
  var verificarBoolean = [];
  for (var u = 0; u < check.length; u++) {
    verificarBoolean[u] = check[u].checked;

    if (verificarBoolean[u] == true) {
      arrayCheck[u] = true;
    } else {
      arrayCheck[u] = false;
    }
  }

  var checkStr = JSON.stringify(arrayCheck);
  localStorage.setItem("concluido", checkStr);
}
