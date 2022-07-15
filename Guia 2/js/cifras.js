function init(){
    var form = document.getElementById('form');
    form.onsubmit = function(){
        EjecucionDeDatos();
    }
    function EjecucionDeDatos(){
        var Longitud = 0, Impares = 0, Pares = 0, SumaImpares = 0, SumaPares = 0, SumaTotal = 0, Mayor, Menor, cadena = "";
        var Resultados = document.getElementById("divDATOS");
        var Datos = document.getElementById("inputNUMBER").value;
        
        Cadena = Datos.toString();
        Longitud = Cadena.length;

        Mayor = Cadena.slice(0,1);
        Menor = Cadena.slice(0,1);

        for (var i = 0; i <= Longitud-1; i++){
            
            //En cada vuelta se le asigna un caracter distinto de la cadena
            var Num = Cadena.slice(i,i+1);
            
            //Calcular si es un par o impar
            if(Num%2 == 0){ //Si el num es par
                Pares += 1;
                SumaPares += parseInt(Num);
            }else{ //Si el num es impar
                Impares += 1;
                SumaImpares += parseInt(Num);
            }
            //Detecta si hay un nuevo numero mayor
            if(Num > Mayor){
                Mayor = Num;
            }
            //Detecta si hay un nuevo numero menor
            if(Num < Menor){
                Menor = Num;
            }
        }

        SumaTotal = SumaPares + SumaImpares;

        Resultados.innerHTML = "<h1> Resultados obtenidos del numero ingresado: </h1>";
        Resultados.innerHTML += "<p> La longitud del numero ingresado es de: <b>" + Longitud + "</b></p>";
        Resultados.innerHTML += "<p> La cantidad de cifras impares del numero ingresado es de: <b>" + Impares + "</b></p>";
        Resultados.innerHTML += "<p> La cantidad de cifras pares del numero ingresado es de: <b>" + Pares + "</b></p>";
        Resultados.innerHTML += "<p> La suma de las cifras impares del numero ingresado es de: <b>" + SumaImpares + "</b></p>";
        Resultados.innerHTML += "<p> La suma de las cifras pares del numero ingresado es de: <b>" + SumaPares + "</b></p>";
        Resultados.innerHTML += "<p> La suma total de las cifras del numero ingresado es de: <b>" + SumaTotal + "</b></p>";
        Resultados.innerHTML += "<p> La mayor cifra del numero ingresado es de: <b>" + Mayor + "</b></p>";
        Resultados.innerHTML += "<p> La menor cifra del numero ingresado es de: <b>" + Menor + "</b></p>";

    }
}
window.onload = init;