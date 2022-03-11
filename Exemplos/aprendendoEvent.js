/* Este documento não está sendo chamado por nenhum arquivo
    Serve apenas como aprendirado */



// evento load atribuida ao método (event listener) addEventListener
// evento load atribuida ao método disparador addEventListener
window.addEventListener('load', function () {
  console.log('Página totalmente carregada');
});

// propriedade (event handler) onload
// propriedade manipuladora onload
window.onload =  function () {
  console.log('Página totalmente carregada');
};




// Não funciona - O alerta é dado ao inicar a página :/
btn.addEventListener("click", alert("texto alerta"));

// Funciona - O alerta é dado ao clicar btn
btn.addEventListener("click", function(){ alert("texto alerta") });

// Funciona - O alerta é dado ao clicar btn
function alerta(){
    alert("texto alerta")
}
btn.addEventListener("click", alerta);