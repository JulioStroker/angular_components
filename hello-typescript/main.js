var teste = 'vanilla';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
// Ambas funções fazem a mesma coisa, porem, no exemplo abaixo temos o arrowFunction do TS
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES2015
var Mathx = /** @class */ (function () {
    function Mathx() {
    }
    Mathx.prototype.soma = function (x, y) {
        return x + y;
    };
    return Mathx;
}());
