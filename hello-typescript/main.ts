var teste = 'vanilla';

function minhaFunc(x,y){
    return x + y;
}

let num = 2;
const PI = 3.14;

var numeros = [1,2,3];

// Ambas funções fazem a mesma coisa, porem, no exemplo abaixo temos o arrowFunction do TS
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => valor * 2); // ES2015

class Mathx{
    soma(x,y){
        return x + y;
    }
}

