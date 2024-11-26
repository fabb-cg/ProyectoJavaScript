let boton=document.getElementById("boton");
boton.addEventListener("click", function(event){

event.preventDefault();
let nuevoid=document.createElement("div");
 nuevoid.innerHTML="divcreado";
let resultado=document.getElementById("resultadodiv");
 resultado.appendChild(nuevoid);
 nuevoid.classList.add("borde-negro");


 }
);