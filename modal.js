var modal = document.getElementById('myModal');
var btn = document.getElementById('ok');
var span = document.getElementsByClassName("close")[0];
var origemClique = "nenhum";

function AbrirPopUp(origemClick) {
    modal.style.display = "flex";
    origemClique = origemClick;
    esconderJogo();
}

function fecharPopUp(){
    modal.style.display = "none";
    mostrarJogo();
}
function mostrarJogo() {
    var blocoJogo = document.getElementsByClassName("blocoCompleto")[0];
    blocoJogo.style.visibility = "visible";
}
function esconderJogo() {
    var blocoJogo = document.getElementsByClassName("blocoCompleto")[0];
    blocoJogo.style.visibility = "hidden";
}