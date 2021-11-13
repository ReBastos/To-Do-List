function adicionar() {
    var tarefa = document.getElementById("inputTarefa").value;
    var iconeTrash = '<i class="fas fa-trash"></i>';

  if (tarefa != "") {
    
    var listItem =
      "<li><input type='checkbox'><span>" + tarefa + "</span> <button class='trash' onclick='remover()'>"+iconeTrash+"</button></li>";

    var lista = document.getElementById("uList");

    lista.insertAdjacentHTML("beforeend", listItem);

    document.getElementById("inputTarefa").value = null;
  } else {
      window.alert("Insira uma tarefa!");
  }
}

function remover(){
    
    event.target.parentNode.remove();
}