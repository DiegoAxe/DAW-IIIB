var Total = 0;
var Contador = 1;
var Bandera = false;

alert("Bienvenida al sistema de productos y precios, primero ingrese el nombre del producto y luego su precio: ");


    var Precio = new Array();
    var NombreProd = new Array();
    document.write("<table>");
    document.write("<tr><th> # </th><th> Productos </th><th> Precio </th></tr>");

    for(var i = 1; Bandera == false; i++){
        NombreProd[i] = prompt("Ahora, ingrese el nombre del " + i +"° producto ");
        Precio[i] = prompt("Ahora, ingrese el precio del " + i +"° producto ");
    
        document.write("<tr><td>"+ Contador + "<td> " + NombreProd[i] + "</td><td>$" + Precio[i] + "</td></tr>");
        Total += parseFloat(Precio[i]);
        Contador++;
        
        var verificar = confirm("¿Desea registrar otros productos?:");

        if(verificar == true){
            Bandera = false;
        }else{
            Bandera = true;
        }
    }
    
document.write("<tr class='total'><td>  <td>TOTAL</td><td>$" + Total +"</td></tr>");
document.write("</table>");