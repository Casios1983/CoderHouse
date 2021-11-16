var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
var ferrari = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... gogogo!!!");
    }
};
var hombre = {
    reir: true,
    comer: true,
    llorar: false
};
var reir = function (hombre) {
    if (hombre.reir) {
        console.log("JAJAJAJA");
    }
};
var ciudad = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.imprimirBio = function () {
    };
    return Persona;
}());
