/*
JavaScipt 
Lo primero que debemos hacer es seleccionar los elementos del DOM eso lo debemos hacer con los métodos que aprendidos con anterioridad en 
el curso que ante cualquier duda puedes consultar, es aconsejable releer toda esa primer parte. ¿Cuáles de esos elementos en realidad que 
necesitamos en JS? Bueno nuestra meta es lograr que el botón sea interactivo asique debemos asignarle un→EventListener a ese botón y para 
eso necesitamos obtener una referencia en el DOM y también vamos a seleccionar este elemento→p el párrafo donde mostramos el color→#2B807B 
para poder actualizarlo cuando ágamos click en el botón vamos a cambiar ese código dinámicamente que se genera aleatoriamente y se va a 
cambiar el color de fondo del cuerpo asique con un evento de click van a ocurrir bastantes cosas. Para seleccionar el boton vamos a usar  
.querySelector(“button”); eso nos va a retornar el primer elemento con la etiqueta “button” y también vamos a obtener el id “color” de este 
elemento→p color→#2B807B en este caso vamos a usar .getElementById(); Lo primero que necesitamos en verdad es definir una función que maneje 
el proceso de generar un color hexadecimal aleatorio. Vamos a crear una función y en su cuerpo vamos a definir una cadena de caracteres con 
todos los dígitos posibles para ese color Hexadecimal, xej. en el sistema decimal podemos usar los números entre cero y nueve pero en el 
sistema hexadecimal los caracteres son mixtos números entre cero y nueve y las letras entre A y F, en este caso vamos a implementarlo en una 
cadena de caracteres con todas esas posibles opciones `0123456789ABCDEF`  16 opciones es lo que realmente necesitamos. Para cada digito vamos 
a seleccionar cada uno de esos caracteres, hay muchas formas de implementarlo en este caso para fines de simplificar el ejemplo en el proyecto 
se escogió ser explícito y crear esta cadena de caracteres. También vamos a definir una variable para guardar el color que vamos generando 
el color Hexadecimal. En este caso tenemos dos variables con el mismo nombre→color pero const es una variable global y let es una variable 
local para esa función, no va haber ningún conflicto si tienen el mismo nombre pero para evitar cualquier posible confusión vamos a definir 
la variable local let colorEx. Como un color hexadecimal tiene seis dígitos se pueden abreviar en tres si se repiten de a pares pero vamos 
asumir que el color va a tener seis posibles dígitos porque no sabemos si son iguales uno de los pares, entonces vamos a tener un bucle for 
con seis iteraciones para generar un índice aleatorio con esos seis dígitos dentro de la cadena de caracteres que nos va a permitir 
seleccionar de forma aleatoria uno de estos dígitos para agregarlo al color hexadecimal, para eso vamos a usar el método .random() que nos 
va a retornar un número seudo aleatorio entre cero y uno vamos a multiplicar ese número por 16 ¿por que multiplicamos por 16? Porque la 
variable contiene 16 caracteres y en este caso Math.random no va a incluir ese valor 1 por que no es una opción no está incluido el 1 en sí 
asique el resultado nunca va a ser 16 el mayor valor que vamos a obtener cuando usemos .floor va a ser 15 que es el último índice vamos a ir 
del indice 0 a 15 `0123456789ABCDEF` y vamos a escoger un indice aleatorio y ese es el indise que luego vamos a usar para  agregar ese 
digito al color. Luego como queremos tener un entero vamos a usar el método .floor que nos va a permitir redondear el numero  para obtener 
el mayor entero que es menor o igual a este valor por ejemplo si retona 14.25 Math.floor() nos va a entregar 14 y ese es el índice que vamos 
a usar. Nota al pie: Tanto los metodos .random y .floor  van precedida pot Math ¿que es→Math? Es un objeto incorporado que tiene propiedades 
y métodos para constantes y funciones matemáticas. No es un objeto de función. Math funciona con el tipo Number. Proporciona constantes y 
métodos estáticos para operaciones trigonométricas, logarítmicas y otras funciones matemáticas comunes. 
Y luego en el cuerpo del bucle for ahí en el color vamos a tomar el valor actual del color los dígitos que ya hemos agregado y vamos agregar 
un digito nuevo ¿Cuál digito va hacer? Un índice de esa secuencia un digito que seleccionamos de forma aleatoria. 
Esto→colorEx += digitos[indiceAleatorio] lo que está haciendo es expandir esa cadena de caracteres con el color hexadecimal y luego aquí 
fuera del bucle for retornamos el color hexadecimal y con esto ya tenemos la función definida. Pero primero para poder ejecutar la función 
tenemos que decirle a nuestra aplicación que queremos asociar nuestra función con un click. Para hacer esa conexión vamos a usar el método→
.addEventListener() y cual de esos eventos queremos manejar, el evento de click y como lo queremos manejar porque eso es muy importante como 
queremos manejar ese evento. Necesitamos realizar distintos pasos, no solamente necesitamos llamar esta función generarColorExAleatorio() 
por que la función solo va a generar un color aleatorio no va actualizar nada en el DOM ningún color, ningún texto y ningún elemento queremos 
llamar a la función obtener ese color retornado y luego hacer las actualizaciones necesarias. Para eso vamos a definir otra función si puedes 
definir la función directamente aquí pasándola como un segundo argumento o también puedes definirla de forma independiente en el código, son 
todas alternativas diferentes que se pueden realizar y es bueno saberlo. Lo primero antes de hacer cualquier cambio es obtener el color 
aleatorio, vamos a llamar a la función generarColorExAleatorio() y vamos a obtener ese color. ¿Qué es lo que queremos hacer con ese color? 
El color va aparecer en el texto que vemos sobre el botón asique vamos actualizar el contenido del texto de ese elemento p en este caso si 
vamos a trabajar con el elemento del DOM este color que obtuvimos con el metodo .getElementById(`color`); a partir de su id este es el elemento 
p en el párrafo que mostramos su color actual, vamos actualizar su→textContent también se pueden utilizar distintas opciones para actualizar 
pero en este caso usamos textContent que va a funcionar perfectamente en este proyecto y vamos asignarle directamente colorAleatorio que ya 
es una cadena de caracteres y luego ¿Cómo podemos hacer para actualizar la etiqueta body? De esta forma→ document.body y luego que ya accedemos 
al body podemos acceder a sus propiedades como por ejemplo style, recuerda style cuando asignábamos estilos en línea en los ejemplos anteriores 
exactamente igual podemos actualizar su estilo y debemos especificar cuál de esas propiedades debemos actualizar en este caso es el color de 
fondo→backgroundColor ¿y cual valor queremos asignar? El color aleatorio que obtuvimos a partir de esta función→generarColorExAleatorio() y 
esas son las dos funciones. Es importante analizar todas las necesidades del proyecto para tener una idea de que es lo que necesitas en el 
código por que inicialmente podríamos a ver pensado que solo nesecitabamos esta funcion→generarColorExAleatorio() pero también necesitamos 
actualizar estos valores el texto y el color de fondo propiedades en el DOM asique eso es muy importante para saber que referencias necesitas 
tener en el archivo app.js. Ahora ya para finalizar este proceso con las herramientas de Chrone vamos a comprobar fehacientemente que el 
color aleatorio hexadecimal y su texto lo vemos dentro del contenedor es el color que se presenta como como tal de fondo en la pantalla. 
Ya en Chrone en console vamos a body y vemos ahí ese estilo de fondo de pantalla puedes ver que automáticamente lo convierte a RGB pero si 
haces click sobre el color y luego haces click en las flechitas que están sobre la derecha podrás ver el código hexadecimal equivalente 
al código que muestra la aplicación. Y así ya completamos nuestra aplicación interactiva para manipular el DOM. 

Seleccionar los elementos del DOM*/
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
 