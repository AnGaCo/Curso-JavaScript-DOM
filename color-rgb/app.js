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
inputRojo.addEventListener('change', (e) => { // Escucha le evento change→cambio en elmento input rojo
rojo = e.target.value;//target es el elemento blanco extraer su valor y así podemos asignarle a una variable
textoRojo.innerText = rojo;
actualizarColor(rojo, verde, azul);
});

//actualizar el input para el (verde)
inputVerde.addEventListener('change', (e) => { // Escucha le evento change→cambio en elmento input verde
verde = e.target.value;//target es el elemento blanco extraer su valor y así podemos asignarle a una variable
textoVerde.innerText = verde;
actualizarColor(rojo, verde, azul);
});

//actualizar el input para el (azul)
inputAzul.addEventListener('change', (e) => { // Escucha le evento change→cambio en elmento input azul 
azul = e.target.value;//target es el elemento blanco extraer su valor y así podemos asignarle a una variable
textoAzul.innerText = azul;
actualizarColor(rojo, verde, azul);
});
