//Seleccionar los elementos del DOM
const boton = document.querySelector("button"); //eso nos va a retornar el primer elemento con la etiqueta button
const color = document.getElementById("color"); //obtener el id color de este elemento→p en html

function generarColorExAleatorio(){
  let digitos = "0123456789ABCDEF";
  let colorEx = "#";  
  
  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random()*16);
    colorEx += digitos[indiceAleatorio];     
  } 
  
  return colorEx;
}  

boton.addEventListener("click", function() {
  let colorAleatorio = generarColorExAleatorio();
  // Actualizar el texto
  color.textContent = colorAleatorio;
  // Actualizar el color de fondo 
  document.body.style.backgroundColor = colorAleatorio; 
});
 