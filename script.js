
var tarefasLocal = [];
var indexLocal = 0;

function adicionar() {
  var tarefa = document.getElementById("inputTarefa").value;
  var iconeTrash = '<i class="fas fa-trash"></i>';

  if (tarefa != "") {
    var listItem =
      "<li><input type='checkbox'><span class='texto'>" +
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

    armazenamentoLocal();
    

    
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

  armazenamentoLocal();
}

//Atualiza Local Storage
function armazenamentoLocal(){
  var span = document.getElementsByClassName("texto");
    var arraySpan = [];

    for (var i = 0; i < span.length; i++) {
      arraySpan[i] = span[i].textContent;
      console.log(arraySpan[i]);
    }

    var spanStr = JSON.stringify(arraySpan);

    localStorage.setItem("tarefa", spanStr);

    console.log(localStorage.length);
}