const botoes = document.querySelectorAll("button");
const microBlocos = document.querySelectorAll(".micro");


// Evento para Botão [0] - manipulador executando uma função
botoes[0].addEventListener("click", function () {
    console.log("botoes[0].addEventListener() foi clicado");
    let idade = 15;
    let altura = 1.66;
    resposta = fComEntradaComRetorno(idade, altura);
    microBlocos[0].innerHTML = resposta
});

function podeMeChamar() {
    console.log("podeMeChamar() foi executada");

    let idade = 22;
    let altura = 1.74;
    resposta = fComEntradaComRetorno(idade, altura);
    microBlocos[0].innerHTML = resposta
}
// Evento para Botão [1] - manipulador chamando uma variável
botoes[1].addEventListener("click", podeMeChamar);



// Evento para Botão [2] - manipulador executando uma função
botoes[2].addEventListener("click", function () {
    console.log("botoes[2].addEventListener() foi clicado");

    let i = 0;
    let valor = microBlocos[i].innerHTML
    fComEntradaSemRetorno(valor,i);
});



// Evento para Botão [3] - manipulador executando uma função
botoes[3].addEventListener("click", function () {
    console.log("botoes[3].addEventListener() foi clicado");

    let conteudo = microBlocos[2].textContent;
    conteudo = parseFloat(conteudo);
    area = fSemEntradaComRetorno();
    microBlocos[2].textContent = conteudo + area;
});



// Evento para Botão [4] - manipulador chamando uma função
botoes[4].addEventListener("click", function () {
    console.log("botoes[4].addEventListener() foi clicado");

    conteudo = microBlocos[2].textContent;
    c1 = parseFloat(conteudo);
    area = 
    microBlocos[2].textContent = c1 + area;
    fSemEntradaSemRetorno();
});