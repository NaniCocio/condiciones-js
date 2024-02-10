btn = document.querySelector("#button");
mensaje = document.querySelector("#mensaje");


btn.addEventListener("click", function(){
    sel1 = document.querySelector("#sel-1")
    sel2 = document.querySelector("#sel-2")
    sel3 = document.querySelector("#sel-3")
    
    if(sel1.value == 9 && sel2.value == 1 && sel3.value == 1){
        mensaje.innerHTML = "Password 1 correcto"
    } else if (sel1.value == 7 && sel2.value == 1 && sel3.value == 4){
        mensaje.innerHTML = "Password 2 correcto"
    } else {
        mensaje.innerHTML = "Password incorrecto"
    }

});