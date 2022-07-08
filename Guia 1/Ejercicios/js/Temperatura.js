var Celcius = prompt("Ingrese la temperatura en Celcius, esta se convertira en Fahrenheit: ", "");

var Fahren = (Celcius * 9/5) + 32;

var HTML = document.getElementById('info');

HTML.innerHTML = 'Su temperatura en Fahrenheit es: <br> <h1>' + Fahren + '°F</h1>';

