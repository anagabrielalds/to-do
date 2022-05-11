
//função de arrastar
function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
}
  //função de soltar
function onDragOver(event) {
    event.preventDefault();
}
function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');

      const draggableElement = document.getElementById(id);

      let color = "#ccc";
      let classPai = event.target.attributes[0].value;
  
      if(classPai == "Do") color = "red";
      if(classPai == "Doing") color = "yellow";
      if(classPai == "Done") color = "#ccc";
  
      draggableElement.style.backgroundColor = color;

      const dropzone = event.target;
      //acrescentando o  nosso elemento draggable ao menu dropzone:
      dropzone.appendChild(draggableElement);

      //Reinicie nosso objeto dataTransfer:
      event.dataTransfer.clearData();
}
function adicionarNovoItem(texto, elementoPai){
  var elementoDo =  document.getElementsByClassName(elementoPai)[0];
  var novoItem = document.createElement("div");
  var numElementosDo = document.getElementsByClassName("itensDo").length;
  var numElementosDoing = document.getElementsByClassName("itensDoing").length;
  var numElementosDone = document.getElementsByClassName("itensDone").length;
  var numElementosTotal = numElementosDo + numElementosDoing + numElementosDone;

  novoItem.className = "itens"+ elementoPai;
  novoItem.id = "item" + (numElementosTotal + 1);
  novoItem.draggable = true;
  novoItem.ondragstart = onDragStart;
  novoItem.innerText = texto;

  elementoDo.appendChild(novoItem);

}
function AbrirPopUp(pai){
  alert("PopUp Aberto para digitar o texto: " + pai);
}
