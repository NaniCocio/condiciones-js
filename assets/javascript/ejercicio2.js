ip1 = document.querySelector("#ip-1");
ip2 = document.querySelector("#ip-2");
ip3 = document.querySelector("#ip-3");

button = document.querySelector("#button");

button.addEventListener("click", function(){
    suma = Number(ip1.value) + Number(ip2.value) + Number(ip3.value);

    parrafo = document.querySelector("#respuesta");

    if (suma <= 10){
        parrafo.innerHTML = "Llevas " + suma + " stickers"
    }else {
        parrafo.innerHTML = "Llevas desmasiados stickers"
    }

});