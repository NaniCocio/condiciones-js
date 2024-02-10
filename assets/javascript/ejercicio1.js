img = document.querySelector("img");

border = false;

img.addEventListener("click", function(){
    if (!border){
        img.style.border = "solid red 2px";
        border = true;
    } else {
        img.style.border = "none";
        border = false;
    }
});