// Exemplo de função COM parâmetros de entrada e COM retorno
function fComEntradaComRetorno(a,b) {
    console.log("fComEntradaComRetorno() foi executada");

    let txt
    txt = "idade: " + a +  " e ";
    txt += "altura: " + b ;
    return txt
};

// Exemplo de função COM parâmetros de entrada e SEM retorno
const fComEntradaSemRetorno = function (x,i) {
    console.log("fComEntradaSemRetorno() foi executada");
    
    window.alert("O conteúdo de microBlocos["+ i +"] anterior " + x);
};

// Exemplo de função SEM parâmetros de entrada e COM retorno
function fSemEntradaComRetorno() {
    console.log("fSemEntradaComRetorno() foi executada");

    let base = prompt("Digite uma base:");
    let altura = prompt("Digite uma altura:");
    base = parseFloat(base);
    altura = parseFloat(altura);
    return base*altura
};

// Exemplo de função SEM parâmetros de entrada e SEM retorno
function fSemEntradaSemRetorno() {
    console.log("fSemEntradaSemRetorno() foi executada");

    let resp = window.prompt("Qual seu nome? ");
    window.alert("Olá " + resp+ ". Bem vindo ao mundo do JS.");
};



