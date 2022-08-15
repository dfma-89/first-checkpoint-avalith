const botonMenu = document.querySelector("#botonMenu");
const menu = document.querySelector ("#menu");
botonMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-boton");
for (let i=0; i<subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function() {
        if (window.innerHeight<1024) {
            const subMenu= this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if (subMenu.classList.contains ("desplegar")) {
                subMenu.classList.remove("desplegar");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height=height+"px";
            }
        }
    });
}

function valida_nombre(){
    if (document.form-events.Nombre.valuelenght==0){
        alert ("Tiene que escribir su nombre")
        document.form-events.Nombre.focus()
        return 0;
    }
}