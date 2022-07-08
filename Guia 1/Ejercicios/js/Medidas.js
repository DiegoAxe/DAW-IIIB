var Metros = prompt("Ingrese la medida en Metros: ", "");

var Pies = Metros * 3.281;
var Yardas = Metros * 1.094;
var Pulgadas = Metros * 39.37;

var Proceso = document.getElementById('Medidas');
var Resultado = document.getElementById('Resultado');

function ResultadoPies(){
    Resultado.innerHTML = 'Los metros a pies resultan en: ' + Pies.toFixed(2) + " ft";
}
function ResultadoYardas(){
    Resultado.innerHTML = 'Los metros a yardas resultan en: ' + Yardas.toFixed(2) + " yd";
}
function ResultadoPulgadas(){
    Resultado.innerHTML = 'Los metros a pulgadas resultan en: ' + Pulgadas.toFixed(2) + " in";
}

Proceso.innerHTML = "<button type='button' value='Pies' onclick='ResultadoPies()'> Pies </button>" +
"<button type='button' value='Yardas' onclick='ResultadoYardas()'> Yardas </button>" +
"<button type='button' value='Pulgadas' onclick='ResultadoPulgadas()'> Pulgadas </button>";


