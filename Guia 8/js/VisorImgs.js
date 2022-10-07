document.onkeydown = keypress;

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

var ltArrow = 37; //Flecha Izquierda
var rtArrow = 39; //Flecha Derecha
var ImgElegida = 0; //Img a la que se movera

var arrayImgs = new Array( //array de direcciones a imgs
    "imgs/img1.jpg",
    "imgs/img2.jpg",
    "imgs/img3.jpg",
    "imgs/img4.jpg",
    "imgs/img5.jpg",
    "imgs/img6.jpg",
    "imgs/img7.jpg",
    "imgs/img8.jpg",
    "imgs/img9.jpg",
    "imgs/img10.jpg"
);

var ImgActual = arrayImgs.length - 1; //Imagen que se muestra actualmente

btnLeft.onclick = MovIzquierda => chgImg(-1);
btnRight.onclick = MovDerecha => chgImg(1);

function chgImg(direccion){
    ImgElegida = ImgElegida + direccion;
    
    if(ImgElegida > ImgActual){
        ImgElegida = 0;
    }
    if(ImgElegida < 0){
        ImgElegida = ImgActual;
    }
    document.getElementById("numIMG").innerHTML = "Imagen #"+(ImgElegida+1);
    document.getElementById("myIMG").src = arrayImgs[ImgElegida];
}

function keypress(evt){
    var thisKey = (evt) ? evt.which : window.event.keyCode;

    if (thisKey == ltArrow ){
        chgImg(-1);
    }
    else if (thisKey == rtArrow ){
        chgImg(1);
    }
    return false;
}
