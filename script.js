
function abrirpopup() {
  let popUp = document.getElementById("meuPopup");
  let botaoFechar = document.getElementById("fecharPopup");

  if (popUp) {
    popUp.style.display = "block";
  }

  botaoFechar.addEventListener("click", function () {
    popUp.style.display = "none";
  });
}