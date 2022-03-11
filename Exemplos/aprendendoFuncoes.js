/* Este documento não está sendo chamado por 
    nenhum arquivo. Serve apenas como aprendirado */

// Função anônima:
function () { conteudoDaFuncao; }

// Declaração de uma função.
function nomeDaFuncao() { conteudoDaFuncao; }

/* Expressão de uma função.
    Uma função anônima é armazenada em uma variável*/
const nomeDaFuncao = function () { conteudoDaFuncao; }
// OU
let nomeDaFuncao = function () { conteudoDaFuncao; }

/* Função de Flecha. 
    Utilizada com bloco de poucas instruções */
const nomeDaFuncao = () => { conteudoDaFuncao; } ;
// OU, quando for apenas uma linha:
const nomeDaFuncao = () => conteudoDaFuncao;



/* Todas as funções também aceitam atributos de entrada,
    por exemplo: */ 
function (entrada) { conteudoDaFuncao; }
const nomeDaFuncao = function (entrada) { conteudoDaFuncao; }
const nomeDaFuncao = (entrada) => conteudoDaFuncao ;


/* Todas as funções também aceitam retornos,
    por exemplo: */ 
    function (entrada) { 
        conteudoDaFuncao; 
        return resultado;    
    }
    const nomeDaFuncao = function (entrada)  { 
        conteudoDaFuncao; 
        return resultado;    
    }
    const nomeDaFuncao = (entrada) => { 
        conteudoDaFuncao; 
        return resultado;    
    }
    /* Se arrow function tiver apenas uma linha 
        ela é o próprio retorno*/
    const nomeDaFuncao = (entrada) => conteudoDaFuncao;


/* Exemplos entrada e retorno*/ 
    function nomeDaFuncao(entrada) { 
        conteudoDaFuncao; 
        return resultado;    
    }
    const nomeDaFuncao = function ()  { 
        conteudoDaFuncao; 
        return resultado;    
    }
    const nomeDaFuncao = function ()  { 
        conteudoDaFuncao;    
    }
    function nomeDaFuncao() { 
        conteudoDaFuncao;   
    }



