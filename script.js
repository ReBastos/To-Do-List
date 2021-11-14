var tarefasLocal = [];
var indexLocal = 0;

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

function concluido(){
  
  if(this.checked){
  var li = this.parentNode;
  
  var tarefaConcluida = (li.getElementsByClassName('texto')[0].textContent).strike();
  
  li.getElementsByClassName('texto')[0].textContent = null;
  li.getElementsByClassName('texto')[0].insertAdjacentHTML('beforeend', tarefaConcluida);
} else {
  var li = this.parentNode;
  var tarefaConcluida = li.getElementsByClassName('texto')[0].textContent;
  
  li.getElementsByClassName('texto')[0].textContent = null;
  li.getElementsByClassName('texto')[0].insertAdjacentHTML('beforeend', tarefaConcluida);
}
}

//Atualiza Local Storage
function armazenamentoLocal() {
  var span = document.getElementsByClassName("texto");
  var arraySpan = [];

  for (var i = 0; i < span.length; i++) {
    arraySpan[i] = span[i].textContent;
    
  }

  var spanStr = JSON.stringify(arraySpan);

  localStorage.setItem("tarefa", spanStr);

  
}
