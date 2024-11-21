function sumar() {
   let valor1=document.getElementById("numero").value;
   let valor2=document.getElementById("numeroDos").value;
   let resultadoTotal=document.getElementById("resultado");
   let resultadoSuma=parseFloat(valor1)+parseFloat(valor2)
   
     
   if(valor1==false || valor2==false){
    alert("Debes escribir algun numero")
   }
   else{
    resultadoTotal.innerHTML="La suma es : " + resultadoSuma;
   }
}