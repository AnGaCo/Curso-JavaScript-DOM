const inputRojo = document.getElementById('rojo'); 
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');
//aqui extraemos el valor de input y lo asignamos a variables
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;


//aqui remplazamos el texto para cada uno de esos parrafos 
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
const colorRGB = `rgb(${rojo}, ${verde}, ${azul}`;
document.body.style.backgroundColor = colorRGB
}


//actualizar el input para el (rojo)
inputRojo.addEventListener('change', (e) => {
rojo = e.target.value;
textoRojo.innerText = rojo;
actualizarColor(rojo, verde, azul);
});

//actualizar el input para el (verde)
inputVerde.addEventListener('change', (e) => {
verde = e.target.value;
textoVerde.innerText = verde;
actualizarColor(rojo, verde, azul);
});

//actualizar el input para el (azul)
inputAzul.addEventListener('change', (e) => {
azul = e.target.value;
textoAzul.innerText = azul;
actualizarColor(rojo, verde, azul);
});
