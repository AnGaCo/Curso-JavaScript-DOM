/*
Seleccionar Elementos
En VSC abrimos nuestro archivo js y solo vamos a trabajar con html y JS al estar vinculados index.html con app.js vamos 
a poder tener acceso a su DOM en la aplicación.  En esta parte veremos cómo podemos seleccionar elementos del DOM para 
tener accesos a sus propiedades y en general a todos sus métodos, el primer paso es seleccionar ese elemento con JS. 
Al tener live server activado vemos el proyecto en el Browser. De esta forma vamos a ver el resultado de lo que escribamos 
en JS en la consola del Browser. La consola es una herramienta que nos permite ejecutar código de JS pero también nos va 
a permitir ver el resultado de nuestro código JS si usamos console.log, cuando abrimos la consola para que sea mas fácil 
poder verla mientras tengo todas las herramientas a la misma vez hacemos click en los tres puntos y luego seleccionamos 
el primer icono de la izquierda Dock side significa que vamos a separar esas herramientas de chrom para tener todo abierto 
al mismo tiempo, luego vamos a console y se abre la herramienta la cual ubicamos convenientemente. Sorprendentemente puedes 
seleccionar un elemento del DOM simplemente usando un método espesifico→.getElementByld() en español significa obtener 
elemento por el id. Si nosotros tenemos en nuestro archivo html un elemento div que contiene un id espesifico→contenedor 
según las reglas de html debería ser único por página web por archivo html asique vamos a poder seleccionar cada uno de 
sus elementos a partir de su id. Es muy similar a definir una constante, si queremos obtener ese elemento del contenedor 
definimos una constante porque una vez que lo obtenemos no lo vamos a cambiar. Le Definimos un nombre y luego usamos un 
objeto especial llamado document ese obj especial que nos da acceso el navegador nos va a permitir llamar al método 
.getElementByld() y luego dentro de los paréntesis tenemos que especificar entre comillas el id que queremos seleccionar→
contenedor en este caso. Así que lo vamos asignar a esta constante que definimos y vamos a usar console.log (); para poder 
ver el valor de la constante contenedor. Como estamos mostrando el valor de contenedor, el obj retornado por el 
método.getElementByld(), si vamos a las herramientas de chrome podemos ver en la consola que tenemos un resultado 
<div contenedor> ese es el elemento html que pedimos con ese método es un div que tiene el id contenedor y puedes ver que 
tiene muchas propiedades diferentes entre esas propiedades podemos ver un elemento familiar childElementCount: 2→
el número de elementos hijos, en este caso tiene dos directos. Como estamos obteniendo ese contenedor vamos a poder 
acceder a sus propiedades y métodos. Una de sus propiedades es→innerHTML esa propiedad nos da acceso a la estructura HTML  
que está contenida dentro de ese elemento. Veamos ese valor con console.log(contenedor.innerHTML); es mostrado como una 
cadena de caracteres que está contenido dentro del div desde el título hasta la lista no ordenada. En este caso es una 
cadena de caracteres y lo puedes ver con console.log(typeof contenedor.innerHTML); typeof devuelve una string.    
 */
const contenedor = document.getElementById("contenedor");
console.log(typeof contenedor); /*return an object */
console.log(contenedor.innerHTML); 
/*
En este caso estábamos trabajando con un contenedor, veamos qué ocurre si intentamos seleccionar un elemento como por 
ejemplo el título, el elemento h1. Veamos que obtenemos, si vamos a las herramientas de desarrollo de chrome aquí vemos 
en la consola Titulo un elemento del DOM llamado h1 puedes ver ese elemento de una forma común poco interactiva porque 
lo puedes expandir ▼ o colapsar ▲ es algo similar a lo que obtenemos cuando usamos la pestaña de elementos para ver su 
contenido al igual que podemos verlo en consola también podemos trabajar con ese contenido nuestro programa en VSC. 
Primero por curiosidad vamos a ver el tipo de datos empleando console.log(typeof titulo); el tipo de datos que se retorna 
es object o sea que título es un objeto con los cuales podemos trabajar usando sus propiedades y sus métodos. 
Otra propiedad importante para los proyectos es la propiedad innerTex esa propiedad inner (en español significa interno
y Tex texto) retorna el texto contenido en ese elemento, en este caso como es un título tiene texto interno tiene un Nodo 
de texto así que vamos a poder tener acceso a ese texto→Topping de Pizza y también al emoji por que también es parte de ese 
texto y al salto de línea, si agregamos typeof se retorna un strings.
También otra propiedad que puede ser interesante es el nombre de esa etiqueta .tagName. Si en algún momento necesitas 
implementar alguna lógica en base al tipo de etiqueta html la puedes obtener a partir de esta propiedad, en español tag 
es etiqueta y name es nombre en consola veras h1 y así es básicamente cómo funciona el método .getElementByld(). 
Nota: se supone que el id es único por documento HTML. En caso que existirá otro id en el mismo documento lo cual no 
seguiría las recomendaciones de html y en consecuencia JS selecciona el primero que encuentra. Otra cosa que suele suceder 
es un error de tipeo, en ese caso el id no existe, como es un objeto la ausencia de ese obj se representa null. 
Es asi como se selecciona un elemento en base a su id y también sabes cómo acceder a ciertas propiedades importantes usando 
la notación de punto y también esa misma notación la puedes usar para llamar a ciertos métodos que veremos más adelantes.           
*/   
const titulo = document.getElementById("titulo");
console.log(typeof titulo); /*return an string*/
console.log(titulo.innerText);
console.log(titulo.tagName);/*return h1*/

/* 
Seleccionar elementos por clases:
En el caso anterior vimos como seleccionar un id, solo podemos seleccionar un solo elemento que tenga ese id por que el 
id es único. Pero cuando seleccionamos con clase podemos seleccionar varios elementos que tengan esa clase. 
Con el método .getElementsByClassName podemos obtener todos esos elementos en base a su clase, todos los que tengan esa classe. 
Declaramos una constante y vamos a usar ese método, nuevamente usamos el objeto especial llamado document porque ese método→
.getElementsByClassName le pertenece al obj especial document que representa en general al documento html a partir del cual se generó ese 
DOM. Codigo→const topping = document.getElementsByClassName("toppings"); y vamos a especificar la clase entre comillas y dentro de los 
patentices como esta especificado en el código, la clase es toppings y luego vamos a mostrar ese resultado con console.log(); a ver lo que 
obtuvimos. Siempre en ese caso cuando selecciones por clases y sepas que hay más de un elemento el nombre de la constante debería estar en 
plural toppings para que sea más fácil de leer el código y más fácil de entender. Vamos a la consola y aquí vemos algo especial, una colección 
HTML vemos que es un tipo de dato especial que es similar a un arreglo en JS y tiene 4 elementos, son 4 elementos porque tenemos 4 toppings. 
Si expandimos ▼ el contenido puedes ver que tenemos algo parecido a índices en realidad si son índices, el primer elemento tiene el índice 0, 
el segundo 1 y así sucesivamente para cada elemento igual que un arreglo de JS pero en este caso en vez de tener elementos sencillos son elementos 
objetos tomados a partir del DOM y vemos que el tamaño o longitud es 4. Si usamos la propiedad .length retornara 4. Volviendo a la colección y 
veamos aquí que es lo que obtenemos. Si queremos expandir ▼ el primer elemento que es cero veras todas las propiedades un elemento del DOM así sea 
nulas o no y su valor para c/u de ellos. Puedes ver que el primero corresponde a aceitunas vemos su texto interior y también tiene un id aceitunas 
así también puedes obtener un id de un elemento porque es una propiedad de ese elemento que vamos a obtener. También puedes obtener todas esas 
listas de clases que tiene ese elemento pero básicamente esto funciona como un array. Veamos cómo puedes acceder a esos elementos individualmente 
por que no siempre vamos a tener que necesitar trabajar con ellos como un array por ejemplo si necesitas solo acceder a las aceitunas a ese elemento 
que corresponde a aceitunas usarías su índice correspondiente en este caso [0] si lo mostramos con console.log(toppings[0]); vemos el elemento 
seleccionado li#aceitunas.toppings.fondo-marron la primera secuencia de caracteres representa la etiquetas de caracteres luego el numeral que es 
un id y los puntos son clases que tiene ese elemento si expandimos ▼ podrás ver todo el contenido todas las propiedades y métodos de ese Nodo de 
ese elemento html por ejemplo si quiero ese id usando notación de punto console.log(toppings[0].id); obtendremos el id de ese elemento que es 
aceitunas y es exactamente lo que tenemos en el archivo html.   
*/
const toppings = document.getElementsByClassName("toppings"); 
console.log(toppings);
console.log(toppings.length);
console.log(toppings[0]);
console.log(toppings[0].id);

/*
.getElementsByTagName ()
Digamos que en lugar de seleccionar en base a una clase específica quiero seleccionar todos los elementos li en mi página 
web de mi documento, como hacemos eso? No necesariamente tengo que asignarle la misma clase si no lo necesito. Si quiero 
seleccionarlos  todos puedo usar el método→.getElementsByTagName() “tag es etiqueta en español” es muy similar al 
método→.getElementsByClassName pero en este caso la búsqueda va a ser más general vamos a seleccionarlo en base al nombre de 
su etiqueta html. La etiqueta debe ir entre comillas. 
Veamos el código→const misToppings = document.getElementsByTagName("li"); y en la herramienta  de chrom en consola puedes 
ver la colección con 4 elementos. De la misma forma que lo seleccionamos anteriormente con la clase ahora la estamos 
seleccionando de una forma más general, todos los elementos de ese tipo se van a seleccionar sin importar si tienen alguna 
clase o li especifico, es importante saber que si tenemos otra lista con elementos li también se seleccionarían esos 
elemento. Veamos la diferencia de esto si quisiera seleccionar todos los elementos con la clase fondo marrón.
Vemos el codigo→const toppingFondoMarron = document.getElementsByClassName("fondo-marron"); pasamos el nombre de la clase 
en lugar de la etiqueta y en la herramienta  de chrom en consola puedes ver la colección con 2 elementos seleccionados a 
partir del DOM. También puedes seleccionar elementos en base a los elementos que cumplan un selector Css específico. 
*/ 
const misToppings = document.getElementsByTagName("li");
console.log(misToppings);
const toppingFondoMarron = document.getElementsByClassName("fondo-marron");                  
console.log(toppingFondoMarron);

/*
.querySelector()
¿Cómo podemos seleccionar un elemento que cumpla el criterio de un selector Css? Tenemos dos métodos diferentes, 
.querySelector() nos permite seleccionar el primer elemento que cumple ese criterio y .querySelectorAll() nos permite 
seleccionar todos los que cumplan ese criterio. Estos métodos son útiles cuando necesitamos un proceso de selección un 
poco más específico es como cuando escribes tus selectores en Css tienes por ejemplo puedes combinar id, class en 
distintos estados también por ejemplo activos o enfocado, esas variaciones más poderosas la de los selectores Css las 
puedes usar con el método .querySelector(). En cambio los métodos que aviamos visto hasta el momento habían sido más 
generales. Veamos cómo puedes usar este método. Vamos a seleccionar este método con el #→id aceitunas usando este 
método que toma como argumento una cadena de caracteres con el selector Css que quieres usar. En este caso como queremos 
encontrar un id el primer elemento con ese id escribimos ("#aceitunas") como vemos en el codigo→
const aceitunas = document.querySelector("#aceitunas"); y en la herramienta  de chrom consola mostramos el resultado 
vemos ese primer elemento del DOM que corresponde a aceitunas que tiene ese id eso es uy útil porque también podemos 
trabajar con sus propiedades y métodos. También podemos usar este método para seleccionar una class  específica en el 
DOM en esa jerarquía (".toppings") seria aceitunas y si efectivamente vemos en consola aceitunas. ¿Que nos retorna 
este método? veamos con typeof  vemos en consola que su retorno es un object con el cual podemos trabajar en JS.
*/                   
const aceitunas = document.querySelector("#aceitunas");
console.log(aceitunas);
const aceituna = document.querySelector(".toppings");
console.log(aceituna);
console.log(typeof aceituna); /*return an object */

/*
Pero hasta el momento todo parece similar con lo que aviamos hecho anteriormente con los otros métodos, el poder de 
este método es que podemos combinar distintos criterios para el selector. Por ejemplo si necesitamos escoger un elemento 
que tenga dos class o con algún id especifico podemos hacer esas combinaciones para obtener lo que necesitamos. 
Digamos que queremos obtener el primer elemento que tenga la clase .toppings y la clase .fondo-naranja, eso es algo que 
no aviamos podido hacer anteriormente. 
pero con el codigo→const primerToppingsNaranja = document.querySelector(".toppings.fondo-naranja"); vemos que el resultado 
es cebolla porque puedes ver que en realidad efectivamente si es el primer elemento del DOM que tiene la clase 
toppings como la clase fondo-naranja y con typeof vemos que retorna object. 
*/  
const primerToppingsNaranja = document.querySelector(".toppings.fondo-naranja");
console.log(primerToppingsNaranja);
console.log(typeof primerToppingsNaranja);

/*
Veamos otro ejemplo: Una forma equivalente a seleccionar el primer toopings con fondo naranja para este caso sería con 
un selector más elaborado que tenga la etiqueta→ul dentro de una lista no ordenada que sea de tipo li y que tengan la 
clase .fondo-naranja. Aquí si vemos el contenido que nos retorna el método.
const primerToppingsNaranja = document.querySelector(".toppings.fondo-naranja"); toppings fondo-naranja, ya esto es un 
ejemplo más elaborado del tipo de selector que puedas escribir para encontrar elementos con el método .querySelector() 
que es muy útil.  
*/
const ToppingsNaranja = document.querySelector("ul li.fondo-naranja");
console.log(ToppingsNaranja);

/*
Y por último veremos otro ejemplo para mostrar cómo puede ser elaborado. Digamos que queremos seleccionar el primer 
elemento, el primer toppings que no sea marrón el primer toppings que no tenga la clase fondo-marron. 
Esto te debería resultar interesante es como un operador en Css que nos permite descartar los elementos que tengan esa 
clase, esa característica. 
Con este codigo→const primerToppingsNoMarron = document.querySelector("ul li:not(fondo-marron)"); vamos a mostrar en 
consola y vemos el primer toppings que no tiene fondo-marron que es cebolla, así que puedes ver las variaciones que 
podemos usar para seleccionar exactamente lo mismo pero debemos saber cómo personalizar el selector para que cumpla 
exactamente lo que necesitamos para nuestra página web. En este caso estamos seleccionado el primer elemento que 
cumpla ese criterio que fuera seleccionado con este selector ("ul li:not(fondo-marron)"); 
Pero veamos qué es lo que ocurre con el método .querySelectorAll() que es una variación y lo veremos a continuacion.       
*/
const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)");
console.log(primerToppingNoMarron);

/*
.querySelectorAll();
Y finalmente el cuarto método que vamos a ver para seleccionar los elementos del DOM es .querySelectorAll() veamos un 
ejemplos con los toppings de fondo naranja, es muy similar a.querySelector() y vamos a pasar como argumento un selector 
Css como una cadena de caracteres, pero en este caso como le estamos agregando la palabra All tenemos un método diferente 
que nos va a retornar una colección html como un arreglo con todos los elementos que cumplen ese criterio por ejemplo 
los elementos de la clase toppings y fondo-naranja veamos qué es lo que ocurre, usando la herramienta de chrom consola 
mostramos el resultado. En este caso tenemos algo diferente, tenemos una lista de Nodos que es diferente a una colección 
html Nodelist y tiene 2 elementos a los cuales podemos acceder con sus índices respectivos [0][1] además esa lista de 
Nodos tiene un tamaño→length además la lista de Nodos se considera un objeto en JS, el método retorna un objeto, puedes 
usar notación de punto para obtener sus propiedades y trabajar con sus métodos. Recuerda los 4 elementos básicos para 
seleccionar elementos del DOM son:
.getElementById();
.getElementsByClassName();
.querySelector();
.querySelectorAll();
Los métodos .querySelector(); y .querySelectorAll(); son más amplios son, más poderosos pero normalmente tratamos de 
usar los que son más específicos como .getElementById(); .getElementsByClassName(); depende de lo que necesites usar y 
también debes tener en cuenta el efecto que puede tener usarlos sobre el desempeño o la eficiencia de tu página 
web o de tu aplicación.
*/
const ToppingNaranja = document.querySelectorAll(".toppings.fondo-naranja");
console.log(ToppingNaranja);
console.log(ToppingNaranja[0]);/*return cebollas */
console.log(ToppingNaranja[1]);/*return champiñones */
console.log(ToppingNaranja.length); /*El metodo return 2 elementos */
console.log(typeof ToppingNaranja); /*return an objct*/

/*
Asignar Estilos:
En este capítulo veremos cómo puedes personalizar estilos de un elemento con JS, eso es muy útil en caso si quieres cambiar el 
estilo o el valor de alguna propiedad Css en base a como el usuario a interactuado con la página web. Por ejemplo si hace click 
en un botón otro elemento puede estar afectado o si alguna operación se completa puedes querer mostrar algún elemento o esconderlo, 
depende de lo que necesites porque esto es muy versátil. Comencemos lo aprendido en la sección anterior como seleccionar un elemento, 
vamos a continuar con nuestros toppings como queremos solamente obtener nuestro primer topping de la lista vamos a usar el método 
.querySelector(); y vamos a encontrar ese primer elemento con la clase .toppings. Para confirmar que tenemos acceso a ese elemento, 
vamos a mostrar en consola y vemos el primer topping aceitunas. Una vez que ya tenemos ese elemento podemos asignar un estilo usando 
notación de punto. Todos los elementos que selecciones van a tener una propiedad llamada style, mostremos esa propiedad en la consola 
para ver el estilo actual de ese elemento veremos el contenido de ese estilo. Es una declaración de estilo Css “cssstyledeclaration” 
expandiendo ▼ en la consola podemos ver todas las propiedades css que normalmente podemos asignarle a un elemento. Todas esas propiedades 
que podemos asignarle en el archivo styles.css también podemos personalizarla en JS. Algo importante para tener en cuenta es que en css 
esos nombre cuando tienen más de una palabra lo separamos con un guion pero en JS vamos a seguir la convención de nomenclatura que usamos 
con las variables y las funciones →camelCase  hay que recordar que son objetos y usando notación de punto puedes acceder a sus propiedades y 
atributos. Vamos a personalizar  este topings, básicamente es como asignarle un valor a una variable. Primero seleccionamos el estilo de ese 
elemento→ primerTopping.style y luego usando notación de punto especificamos cuál de esas propiedades queremos personalizar en este caso es 
color de fondo→ .backgroundColor = "blue"; y veamos qué es lo que ocurre, usando la herramienta  de chrom consola mostramos el resultado. 
El primer topping Aceitunas su color es de fondo azul se cambió el estilo con JS. Si cambiamos a la pestaña Elements en las herramienta de 
Chrome seleccionamos el icono superior izquierdo que permite que el cursor seleccione el elemento deseado en este caso el primer elemento de la 
clase .topping puedes notar que si revisas el DOM vas a encontrar un estyle en línea que se le asignó a ese elemento en específico, le agrega un 
atributo estyle a ese elemento y agrega esa propiedad Css con el valor que corresponde y vemos también como JS sabe automáticamente como transformar 
esa propiedad en la notación que normalmente usamos en Css con un guion para separar las palabras style = “background-color: blue;” y culmina esa 
línea con un punto y coma como hacemos en Css asique ese estilo va a tener la mayor prioridad porque es un estilo en línea. No es un estilo 
asignado a través de una clase o de un id. A continuación vamos a personalizar el estilo del color de letra usando color hexadecimal como lo harías 
normalmente en Css .style.color = "#6dff00"; y veamos qué es lo que ocurre, usando la herramienta  de chrom consola, efectivamente vemos el color de 
la letra como un verde neón y el fondo es azul. Puedes ver que ese estilo se agregó a la lista de style en línea para ese elemento, si bien en JS lo 
especificamos como hexadecimal pero automáticamente se transformó en un modelo RGB. También otro ejemplo interesante es que podemos transformar el 
texto a mayúscula. .style.textTransform = "uppercase"; igual que lo haríamos con una propiedad en Css. Puedes ver que ese estilo se agregó a la 
lista de style en línea para ese elemento y recuerda que ese estilo va a tener la mayor prioridad porque es un estilo en línea. Una vez que ya 
obtuvimos del DOM el nombre del elemento, en este caso→ primerTopping puedes usar el mismo formato o misma sintaxis→primerTopping.style. seguido del 
nombre de cualquier propiedad que puedas personalizar. console.log(primerTopping.style); Si espandimos ▼ return muestra todas las propiedades 
*/
const primerTopping = document.querySelector(".toppings");
console.log(primerTopping);
console.log(primerTopping.style); /*Si espandimos ▼ return muestra todas las propiedades*/
primerTopping.style.backgroundColor = "blue";/*return fondo azul*/
primerTopping.style.color = "#6dff00";/*return letra verde neon*/ 
primerTopping.style.textTransform = "uppercase";/*return texto en mayuscula*/

/*
Textos en el DOM:
Formas y alternativas de acceder al contenido interno de un elemento que contiene texto. Primero que todo cualquier operación realizada con el DOM 
debemos obtener ese elemento usando uno de los métodos que vimos en anteriores capítulos. En este caso vamos a seleccionar la lista-toppings, la 
lista como tal el elemento ul con el método .getElementById(); vamos a obtener esa lista con su id→("lista-toppings") lo mostramos en la consola 
para ver que tenemos acceso a esa lista. Efectivamente tenemos la lista de toppings con sus 4 elementos interno, esa lista también contiene Nodos 
específicos para el texto y hay varias formas para acceder a ese texto en caso que necesites usarlo en el programa o modificarlo. El primero es 
.innerText. (Acotación: Texto interno). Vemos en consola el resultado ACEITUNAS, Cebolla, Albahaca, Champiñones. Si vemos la descripción nos dice 
que retorna una cadena de caracteres. Ahora veamos el resultado con .textContente que puede ser similar a .innerText y vamos a mostrar el nombre de 
las propiedades para diferenciarlas solo para fines visuales. Vemos en consola que .innerText nos retorna cadenas de caracteres en el orden en que 
se encuentran en el archivo html. En contraste .tectContent aparece en forma similar pero incluye los espacios que tenía ese texto en el archivo html
si vemos el archivo html puedes ver que el texto de los títulos esta indentado. Este texto que muestra .textContent no está al mismo nivel que el 
elemento html principal, en el archivo index.html contamos 8 espacio de indentación para ese elemento li exactamente los mismos espacio vemos en 
consola. Esto es importante saberlo en caso que tengas que decidir cuándo usar estas propiedades .textContent o .innerText. Y final mente tenemos 
una tercera opción que se denomina .innerHTML esta propiedad es un poco diferente a las dos anteriores que solo retornaban textos en cambio 
.innerHTML va retornar la estructura html interna de ese elemento como una cadena de caracteres. En consola podemos ver toda esa parte de la 
estructura html como si fuera el archivo index.html incluyendo las etiquetas de apertura de cierre de cada uno de esos elementos incluyendo las 
class sus id. en contraste a las dos anteriores propiedades solo obteníamos el texto.
Esa son las tres formas de poder acceder al texto de un elemento.                      
*/               
const listaDeToppings = document.getElementById("lista-toppings"); 
console.log("> innerText");
console.log(listaDeToppings.innerText);
console.log("> textContent");
console.log(listaDeToppings.textContent);
console.log("> innerHTML");
console.log(listaDeToppings.innerHTML);

/*
Acceder al texto de un elemento: elemento = document.getElementById("elemento");
Al igual que podemos acceder al texto, al contenido de ese elemento también podemos modificarlo. Vamos a obtener el elemento titulo y vamos a 
cambiar su contenido y verificamos con la herramienta de Chrome en la consola  const modificarTitulo = document.getElementById("titulo"); y 
efectivamente tenemos el título h1 y si obtenemos su valor innerText vamos a obtener toppings de pizza, digamos que queremos cambiar ese texto como 
tal, lo que hacemos en ese caso es asignar una cadena de caracteres a la propiedad .innerText digamos que optamos por “Mis toppings favoritos”  
Verificamos en consola y podemos ver el cambio realizado con el nuevo texto. Simplemente se modificó el texto de ese elemento en el DOM con una 
sola línea de código→ titulo.innerText = "Mis toppings favoritos"; 
*/
console.log(titulo);/*La constante titulo esta declarada en la linea 54 y se le asigna el metodo .getElementById(titulo); */
console.log(titulo.innerText);
titulo.innerText = "Mis toppings favoritos"; /*Se modifico el titulo h1 */

/* 
Atributos:
Ahora veremos cómo podemos modificar los atributos de un elemento. Después de la lista no ordenada de toppings vamos agregar un enlace para 
modificar el atributo href no lo colocamos en una pestaña nueva para fines de la demostración <a href="https://www.freeCodeCam.org/Español/"> 
definimos una constante para el enlace y vamos a seleccionar los elementos por el nombre de su etiqueta. En este caso va a ser la etiquita→a Veamos 
el valor de  enlace en consola, es una colección html con tan solo un elemento el elemento que tenemos para el enlace. Como es una collection html 
vamos a seleccionarla con su índice [0] y cuando lo seleccionamos vamos a poder trabajar con ella como si fuera cualquier otro elemento, cualquier 
otro objeto del DOM. Y si necesitamos verificar algunos de sus atributos podemos llamar el método→.getAttribute("href") en este caso el valor de 
href en consola lo podemos ver→https://www.freeCodeCam.org/Español/ podemos trabajar con ese valor en nuestro programa, modificarlo o eliminarlo si 
lo necesitamos. Para eliminar ese atributo usamos el método→.removeAttribute al ejecutar ese método seguidamente vemos en Console el valor undefinet 
y pasamos a Elements en la etiqueta de apertura ya no vemos el atributo href por que fue eliminado dinámicamente en el DOM ese atributo ya no es 
parte de ese elemento html. Si necesitamos obtenerlo usamos el método .getAttribute() y también si necesitamos actualizarlo podemos usar el método 
.setAttribute() Especificamos en el código como primer argumento el atributo que quiero personalizar→href ya que es el único enlace que tenemos en 
la página y su índice es [0] y como segundo argumento paso el valor que quiero asignar codigo→.setAttribute("href", "https://www.freeCodeCam.org")); 
vemos en la herramienta de Chrome Elements el resultado, vemos como se actualizo el DOM ahora ese enlace tiene como referencia, como destino→ 
https://www.freeCodeCam.org ya no vemos /español así es como podemos actualizar los atributos y esto funciona con cualquier atributo valido en 
html para ese elemento.
*/
const enlase = document.getElementsByTagName("a");
console.log(enlase[0].getAttribute("href"));/*verificacion de su atributo*/
/*console.log(enlase[0].removeAttribute("href"));Eliminacion de su atributo*/
console.log(enlase[0].setAttribute("href", "https://www.freeCodeCam.org")); /*actualizar el atributo*/

/*
Clases:
Otras operaciones importantes que puedes realizar en JS son agregar modificar y eliminar clases en forma dinámica con esta operación. 
Nuevamente vamos a seleccionar el primer toppings que consigamos en el DOM. Estamos usando los toppings solo para fines de demostración 
para que nos concentremos en las operaciones nuevas. Vamos a mostrarlo en la consola y ahí lo podemos ver. <li class="toppings fondo-marron" 
id="aceitunas" style="background-color: blue; color: rgb(109, 255, 0); text-transform: uppercase;">Aceitunas</li>.
En JS cada uno de esos elementos que estamos seleccionando en el DOM va a tener una propiedad llamada .classList es una lista de todas las 
clases que tiene actualmente ese elemento “pirimerToppings” en el DOM,  en consola lo puedes ver DOMTokenList(2) ese elemento tiene 2 clases, 
la clase .toppings y la clase fondo-marron puedes ver que es como un array con dos elementos cada uno tiene su índice [0][1] de igual forma 
puedes acceder a ellos. Vemos que  tiene la propiedad lengts: que puedes usar en el programa y también tiene la propiedad value: en caso que 
necesites obtener toda esa cadena de caracteres con la lista de clases. 
{
    "0": "toppings",
    "1": "fondo-marron"
    Lengts: 2
    Value: “toppings fondo-marron”
}
Agregar una Clase:   
Si necesitamos agregar una clase a un elemento escribimos el nombre de ese elemento luego que ya lo seleccionamos en el DOM luego 
class.list y luego llamamos al método .add()→(en español agregar) y agregamos en los patentices una clase espesifica mi-Clase que todavía 
no le hemos asignado ningún estilo es solo para fines de demostración. Es para  verla aquí en la lista de clases DOMTokenList(3) vemos que 
se agregó una porque ahora vemos 3 y vemos mi-Clase en la lista que se retornó. También si vamos a Elements y seleccionamos ese elemento 
podemos ver que ahora tiene una tercera clase llamada mi_Clase, si esa clase tuviera un estilo en el archivo Css se aplicaría ese estilo.  
*/ 
const primer_Topping = document.querySelector(".toppings");
primer_Topping.classList.add("mi-Clase");
console.log(primer_Topping);
console.log(primer_Topping.classList);

/*
Incluir la clase en el archivo Css:
En otro ejemplo con el toppings-fonfo-Naranja,  aplicando lo aprendido anterior mente vamos a nuestro archivo Css y agregamos una nueva 
clase que la llamaremos  texto-verde y le asignamos el color verde neón. Estamos agregando esa clase al primer toppings de fondo-naranja 
que sería el elemento cebolla y también mostramos la lista de clases para confirmar que existe. En Chrone vamos a Console y podemos ver que 
se aplicó el estilo texto-verde
*/
const segundo_Topping = document.querySelector(".toppings.fondo-naranja");
segundo_Topping.classList.add("texto-verde");
console.log(segundo_Topping);
console.log(segundo_Topping.classList);

/*
Verificar si una Clase existe: 
Otra operación importante también es verificar si un elemento posee una clase o no. Eso lo podemos confirmar con el método contains() este 
método nos permite verificar si una clase especifica existe en esa lista de clases en este caso  <ul id="lista-toppings"> Digamos que 
queremos verificar si tiene la class="toppings fondo-marron". En ese caso como se va a retornar un valor, no es una acción si no que se va 
a retornar un valor boolean true o false. Vamos a mostrar ese valor con consol.log() y vemos el resultado que es true porque ese elemento 
si posee esa clase. Si pasamos una clase que no tiene ese elemento veremos que el valor es false. Esto es útil en caso que necesites 
usarlo en un condicional o en un bucle, más que todo en los condicionales son muy útiles.
Eliminar una clase:  
También se puede eliminar una clase de un elemento, esa operación también es muy útil. Para eso usamos el método remove() y pasamos entre 
paréntesis el nombre de la clase, veamos qué  ocurre si eliminamos la clase toppings a ese elemento. Vamos a Chrone y vemos que el topping 
ya no tiene el estilo asociado a los toppings porque es simplemente otro elemento más sin esa clase, si vemos la lista de clase en Console 
ya no la tiene solo tiene la clase fondo-marron.
Y así es cómo podemos agregar y eliminar una clase y como verificar si un elemento tiene una clase o no. Estas son operaciones muy útiles 
que vas a usar a menudo si trabajas con el DOM. Ahora como ya sabes cómo agregar clases y estilos entonces vamos a ver cómo puede crear 
agregar y eliminar elementos en el DOM.
*/
console.log(primer_Topping.classList.contains("fondo-marron"));
primer_Topping.classList.remove("toppings")

/*
Crear un Elemento:
Veamos cómo puedes crear un elemento desde cero, eso sí solo lo puedes realizar con JS y luego agregar ese elemento al DOM de forma 
dinámica, eso es muy útil como por ejemplo recibes información de un servidor o de una API recibes es información en un formato json que 
se usa para intercambiar datos en desarrollo web y necesitas transformar  esa información en elementos HTML que los usuarios puedan ver con 
los cuales puedan interactuar, lo puedes realizar en forma dinámica. De alguna forma digamos que el usuario va a poder ingresar un toppings 
nuevo. En ese caso deberíamos tomar ese elemento nuevo y crear ese elemento en el DOM. Lo primero que debemos hacer es crear un elemento 
nuevo con el método createElement(); Que tipo de elementos queremos crear? Un elemento (li) un elemento de lista. A ese elemento si lo 
agregamos desde cero sin personalizar nada veamos qué es lo que ocurre. Para agregarlo primero necesitamos obtener una referencia al elemento 
del DOM donde queremos agregarlo porque en este momento JS no sabe nada de nuestro documento, no tenemos referencia a ningún otro elemento 
más que el toppings nuevo, vamos a obtener alguna referencia a la lista de toppings que es donde vamos agregar ese elemento li y si vamos a 
nuetro archivo index.html vemos que el id de ul es lista-toppings.
Agregar un Elemento:
Ahora si tenemos una referencia de esa lista const lista_Toppings = document.getElementById("lista-toppings"); donde queremos agregar el 
topping nuevo porque todo funciona dentro de un contexto y es importante que recuerdes que al agregar un elemento tenemos que especificar 
donde queremos agregarlo. Eso lo podemos hacer con el método .append Este método nos va a permitir agregar un Nodo en esta lista. 
En resumen: vamos agregar un toping nuevo a la lista de toppings, veamos qué es lo que ocurre porque en este momento no tiene ningún 
contenido ni ningún estilo. Si vamos a Chrone en Console vemos que no pasa nada, no ves nada pero en Element vemos que el elemento agregado 
está allí lo podemos ver en el DOM si lo expandimos ▼ podemos ver que está pero no tiene ningún estilo, tampoco ningún contenido. Antes de 
agregarlo en realidad deberíamos asignarles esas propiedades y esos estilos importantes, entre esos vamos agregar una clase, tomando la 
lista de clases y el método  .add dos clases importantes ¡Sí! Con el método .add puedes agregar dos clases a la vez solo tienes que 
separarlas con comas. Abrimos Chrone, Element y podemos ver en el DOM que este último elemento li ahora si tiene un estilo asignado porque 
tiene la clase toppings y tiene la clase fondo-marron. Lo único que nos falta es el texto, para eso podemos personalizar lo que vimos 
anteriormente el método .innertext agregando  un texto “Queso extra” vamos a Chrone en Element vemos que se agregó a la lista de la clase 
topping y fondo marron.
Remover un Elemento:    
Así como podemos crear, agregar elementos también podemos eliminarlo, escribimos el nombre del topping nuevo y luego llamamos al método 
.remove() vamos a Chrone en Element vemos que el elemento nuevo ya no existe removió ese elemento del DOM, lo mismo puedo aplicarlo a 
cualquier elemento por ejemplo si quiero eliminar toda la lista de toppings puedo llamar al método .remove() vamos a Chrone en Element 
vemos que la lista de toppings ya no existe tan sencillo como eso. Lo único que necesitamos es una referencia en el DOM, digamos que sería 
como darle una dirección donde quereos que se desarrollen los acontecimientos.         
const lista_Toppings = document.getElementById("lista-toppings"); También existe otro método llamado .appendChild también funciona y funciona 
para elementos html vamos a Chrone en Element vemos que en este caso es equivalente. Esto funciona con elementos html y si usamos 
.append podemos agregar texto lista_Toppings.append(¡Hola Mundo!); vamos a Chrone en Element vemos que se agregó un Nodo ¡Hola Mundo! 
Que no es un elemento html como tal se agrega el texto pero es un texto sencillo no es un texto que es parte de otro elemento html.
*/
const lista_Toppings = document.getElementById("lista-toppings"); /* Dar una referencia a ese elemento en el DOM*/ 
const toppingNuevo = document.createElement("li"); /*.createElement Crea un elemento*/
toppingNuevo.classList.add("toppings", "fondo-marron"); /*.add agrega una clase a lista de clase*/
toppingNuevo.innerText = "Queso extra";/*innerText nos permite personalizar el texto del elemento*/
lista_Toppings.append(toppingNuevo); /*.append nos permite agrgar un Nodo dentro de otro elemento*/
/*toppingNuevo.remove(); .remove nos permite remover un Nodo*/
lista_Toppings.append("¡Hola Mundo!"); /*Agrega un texto sencillo, no es parte de otro elemento html*/

/*
Recorrer el DOM:
Ya sabes como como crear, agregar y eliminar elementos del DOM con JavaScript esas operaciones son muy útiles. Ahora veamos cómo puedes 
recorrer el DOM porque JS nos permite aprovechar esa jerarquía con Nodos padres, nodos hijos, nodos hermanos toda esa jerarquía nos va a 
permitir recorrer el DOM con nuestro código en caso de que lo necesitemos. Por ejemplo digamos que tenemos el elemento listaDeTtopping en 
caso de que ocurra algo, realizar alguna operación con su elemento o Nodo padre simplemente podemos seleccionar una de estas dos opciones 
parentElement “elemento padre” o parentNode “el Nodo padre” hay que recordar la diferencia entre elemento y Nodo. Nodo es más amplio e 
incluye también textos o comentarios pero el elemento padre solo incluyen los elementos html asique si queremos obtener el parentElement 
de esa lista veamos que obtenemos vamos a Chrome en Console vemos el elemento contenedor el div principal ese es el elemento que contiene a 
la lista de toppings. Es el elemento padre  del elemento ul de la lista y también es el elemento padre de título asique podemos obtener una 
referencia a ese contenedor sin obtenerlo directamente si no indirectamente a través de la lista de toppings, eso va a ser importante
porque por ejemplo en nuestro código a veces vamos a necesitar realizar operaciones con el padre cuando ocurra algo en el hijo por ejemplo 
digamos si hago click en algunos de estos ingredientes de algunos de estos topings quiero cambiar el color de fondo del contenedor solo por 
decir un ejemplo en ese caso yo podría decir que cuando ocurra algo en esa lista, en esos ingredientes, en esos toppings quiero que el 
contenedor cambie de color de fondo. Indirectamente tenemos que afectar el contenedor puedo simplemente usar esta alternativa 
.parentElement con la notación de punto y selecciono a su padre es más sencillo. Ahora si tenemos el Nodo padre .parentNode veamos que 
obtenemos vamos a Chrone en Console vemos que obtenemos aquí div►# contenedor si ▼ expandimos puedes ver todas las características, todas 
las propiedades de ese Nodo siempre recordando que Nodo es más amplio. Si queremos ir todavía más arriba en la jerarquía podemos crear una 
cadena una secuencias de referencia al padre. Aquí estamos obteniendo el padre de la lista de toppigs→ lista_Toppings.parentElement y luego 
usando la notación de punto obtenemos el padre del padre de la lista de toppings→ lista_Toppings.parentElement.parentElement); y así 
sucesivamente vamos a Chrome en Console vemos que obtenemos ►body ya fuimos más arriba todavía en lugar del contenedor principal, eso es en 
el caso de los padres también podemos obtener los Nodos o elementos hijos. En ese caso necesitamos la propiedad .children→ 
“En español hijo” esta propiedad nos va a dar todos los Nodos hijos en la lista de toppings en base a una HTMLCollection(5) en consola lo 
podemos ver, tiene 5 hijos esa lista de toppings expandimos ▼y estos 5 elementos los podemos usar de forma individual con sus [i] índices 
pero tenemos acceso a ellos gracias a esa propiedad .children es que no estamos accediendo a ellos directamente si no indirectamente a 
través de la lista de toppings y eso es útil también para realizar ciertas operaciones en nuestro código además de .children también 
tenemos la opción de seleccionar el primer hijo con la propiedad .fistChild En este caso inesperadamente vemos el ►#text ¿por qué? 
Esta propiedad trabaja con Nodos y desafortunadamente en este caso como estamos incluyendo espacios, indentación, ese espacio también se 
toma como un Nodo. Si quitáramos la indentación en nuestro archivo html en lugar de ►#text lo que se mostraría es el próximo elemento 
<li class= "toppings fondo-marron" id="aceitunas">Aceitunas</li> exactamente lo que esperábamos pero como trabaja con Nodos esta propiedad 
.firstChild normalmente obtendríamos textos en lugar de un elemento como tal por que por norma siempre nuestro código esta indectado 
adecuadamente para poder leerlo correctamente. En ese caso en vez de usar .firstChild usaríamos la propiedad .children y usamos el índice 
correspondiente [0] y allí tendríamos accesos a ese primer hijo directo del elemento, esa propiedad si nos retornaría elementos html. 
También podemos usar esta otra propiedad .lastChild que también usa Nodos y sucede lo mismo que con .fistChild nuevamente en Console vemos 
►#text ya que en nuestro archivo usamos el código indectado en este caso no nos ayuda. Pero por fortunas esas dos propiedades también 
tienen su versión para obtener elementos html en lugar de usar .firstChild usamos la propiedad .firstElementChild y esto va a ser lo más 
práctico para nosotros si necesitamos obtener esos elementos html en Console podemos ver un elemento html el cual tiene propiedades, en 
este caso si verificamos con typeof vemos que es un obj de JS y también tenemos el equivalente para el último elemento hijo y en Console lo 
podemos ver es el toppings Queso extra. Asique tenemos las dos versiones, para trabajar con Nodos y para trabajar con elementos. Entre 
.last y Child agregamos la palabra Element para obtener un elemento html que no incluya ni texto ni los comentarios. Y también además de 
padres e hijos tenemos hermanos ¿Cómo podemos obtener los hermanos de toppings? En este caso si nos vamos a Chrone en Element venos que 
sería h1 titulo que están en el mismo nivel en jerarquía que ul que pertenecen a contenedor que están dentro de ese div ¿Como podemos 
obtener titulo indirectamente a través de lista de toppings? Eso lo haremos con la propiedad .previousElementSibling 
“En español .anteriorElementoHermano” y en Chrone en Console allí lo que vamos a ver es el elemento titulo porque obtuvimos el hermano 
anterior de la lista de toppings. También podemos ver el hermano posterior de la lista de toppings con la propiedad .nextElementSibling 
pero en este caso no tenemos ninguno en el mismo nivel de la jerarquía por lo tanto veremos null y también tenemos la versión para trabajar 
Nodos si omitimos la palabra Element vamos a obtener un Nodo .nextSibling en este caso es texto como vimos anteriormente por los espacio o 
indectado y .previousSibling también nos va a retornar texto asique normalmente vamos a trabajar con la versión que contiene Elements y así 
es como recorrer el DOM con notación de punto usando estas propiedades. 
Recuerda para .parentElement y .parentNode también tenemos .fistChildren para todos los hijos. Tenemos el .fistChild y .firstElementChild 
tenemos el .lastChild y .lastElementdChild (last significa último en español) y también tenemos .nextElementSibling y .nextSibling y 
también tenemos .previousElementSibling y .previousSibling para padres, hijos y hermanos y también puedes encadenar esa notación de punto 
para ir más arriba, más abajo o más profundo en el DOMcomo lo hicimos en el primer ejemplo: 
console.log(lista_Toppings.firstElementChild.firstElementChild); con esto se obtiene “hijo del primer hijo de la lista de toppings” o 
console.log(lista_Toppings.parentElement.parentElement); obtenemos el padre del padre de la lista de toppings, 
Con todas estas propiedades puedes hacer exactamente lo mismo siempre deberías verificar que estas propiedades no sean Nodos que en 
verdad existe y no sea nulo el elemento y así se recorre el DOM. 
*/
/*
A continuacion vemos como comentarios codigo muy util de lo anteriormente explicado:
console.log(lista_Toppings.parentElement); el elemento padre solo incluyen los elementos html 
console.log(lista_Toppings.parentNode); Nodo es más amplio e incluye también textos o comentarios 
console.log(lista_Toppings.parentElement.parentElement); usando la notación de punto obtenemos el padre del padre  
console.log(lista_Toppings.children); obtener los Nodos o elementos hijos
console.log(lista_Toppings.firstChild); opción de seleccionar el primer hijo pero el resultado es ►#text  
console.log(lista_Toppings.children[0]); [0] asi tendríamos accesos a ese primer hijo directo del elemento 
console.log(lista_Toppings.lastChild); al igual que .firstChild el resultado es ►#text
console.log(lista_Toppings.firstElementChild); Como resultado un elemento html el cual tiene propiedades
console.log(lista_Toppings.lastElementChild); resultado [5] último elemento hijo 
console.log(lista_Toppings.previousElementSibling); se obtiene el hermano anterior de la lista de toppings 
console.log(lista_Toppings.nextElementSibling); se obtiene el hermano posterior de la lista de toppings
*/
/*
Eventos del DOM:
En esta parte vamos hablar un poco de los eventos, xq los eventos son muy importantes al momento de interactuar con el DOM. 
Eventos, en una definición no muy formal podemos decir que un Evento es “Algo” que ocurre en un sitio web como resultado de interacción 
con el usuario por otra causa como cambios en el estado del dispositivo o de la ventana, todos esos evento que ocurren en el sitio WEB van 
a desencadenar eventos formalmente en el sistema, en el navegador y eso nos va a permitir saber cuándo ocurren esos eventos cuando el usuario 
este interactuando con distintos elementos de la página y también nos permite definir cómo manejar esos eventos en caso de que ocurran por 
ejemplo uno de los más comunes es el evento de click y cada interacción con el ratón se va a registrar como un evento en el navegador y el 
navegador va a saber sobre cuál de esos elementos se hizo el click y vamos a poder decir en caso de que ocurra el click que es lo que vamos 
hacer en nuestro código. ¿Cómo podemos manejar ese evento? todo eso lo podemos definir con JS y también otro evento común es la iteración 
con el teclado, presionar alguna tecla. Podemos lograr que ciertos elementos que nos interesan en el DOM sepan cuando ocurren uno de esos 
eventos cual de esos elementos fue afectado debería reaccionar en base a ese evento y también cuál de esas teclas fue presionada para saber 
cómo manejar ese evento adecuadamente por ejemplo un caso común sería un juego, si estas desarrollando un juego interactivo en JS y el usuario 
presiona alguna de las teclas xej izquierda o derecha para avanzar y retroceder o arriba y abajo para saltar, todos eso eventos estarían 
registrados y podríamos manejarlos de acuerdo a la tecla que fue presionada todo eso es parte del DOM también cambios en la ventana de la 
pestaña o del navegador también pueden se registrados, se registran automáticamente y puedes manejarlos. Otro evento bastante común en JS 
es el evento de arrastrar xej en una página web te pide que arrastres una imagen para subir y asignarla como tu imagen de perfil. Ese evento 
de arrastrar un archivo asía un elemento en particular y que luego ocurra algo se maneja gracias a la combinación entre el DOM y JS a través 
de esos eventos y también recientemente eventos que deberías manejar son eventos que pueden ocurrir en dispositivos táctiles puedes manejar 
distintos gestos que realice el usuario de distintas formas así que puedes ver que los eventos son bastantes dinámicos y se pueden adaptar 
a distintas necesidades como desees manejarlos. Existen muchos eventos que puedes manejar y puedes encontrarlos en distintos artículos o en 
recursos en línea. En este curso solo veremos algunos de los más comunes como los elementos del teclado y del cursor pero una vez que sepas 
manejar estos eventos manejar otros tipos de eventos es exactamente igual o muy parecidos lo que se necesita saber es la sintaxis de cómo escribir 
ese código para manejar el evento y luego lo único que vas hacer es cambiar el nombre del evento y que es lo que quieres hacer con el elemento.
Conceptos Importantes:                         
Cuando hablamos sobre eventos en el DOM y al momento de manejarlos con JS es importante que sepas algunos conceptos importantes estos cuatros 
que a continuacio se detallan. Elemento targuet que significa “blanco” pero no blanco del color sino el blanco que va a recibir algo  
Trigger también es un concepto que lo vas a recibir muy a menudo es como un desencadenante y luego Event Hander y Event Listener.
Esto es una lista general para que tengas una idea. Veamos c/u en más detalle: Primero tenemos el elemento target el elemento blanco, xej si 
tenemos algunas páginas web y hacemos click sobre algunos de esos elementos que podemos ver, como una imagen, un botón algo que tenga una 
capacidad interactiva ese elemento en el cual se va a generar ese evento es a lo que nos referimos como el target element el blanco de ese 
evento xq el usuario quiso interactuar con ese elemento asique hay que reaccionar a esa interacción y manejarla adecuadamente. Ese elemento, 
el elemento blanco va a decirle al navegador que se produjo una acción por eso es que lo denominamos el elemento blanco allí se desencadeno 
ese evento. Eso nos lleva al próximo termino trigger (en español desencadenar) trigger sería como un desencadenante, esa acción que va a 
desencadenar un evento xej hacer click que luego se va a poder manejar a travez del DOM y JS eso también nos lleva a un concepto que va a 
ser fundamental para trabajar con eventos también con librerías y framewrks como xej  React.  Event Handler es una función que se ejecuta 
cuando ocurre un evento Handler significa manejar es una función que va a manejar un evento cuando ocurra, pero no podemos saber cuándo va 
a ocurrir el evento asique va a estar allí como pendiente. Vamos asociar esto con nuestro código con una función. Código←→Función para decirle 
al navegador que cuando ocurra un evento especifico en un elemento especifico vamos a llamar a una función específica de manera tal que estamos 
asociando todo esto, el elemento, el evento y la función que lo va a manejar si ocurre. Esa asociación que hay en un evento especifico en un 
elemento y  la función que lo va a manejar es lo que denominamos Event Listener, (En español Listener significa escuchar) es esa conexión que 
vamos a crear en nuestro código tenemos que crearla explícitamente en JS para asociar un evento en un elemento con una función específica 
que va a manejar ese evento en ese elemento cuando en ese elemento especifico ocurra un evento se va a llamar esa función pero esa asociación 
la tenemos que crear nosotros mismos en el programa y lo vamos hacer con unas pocas líneas de codigo. Cuando creamos Event Listener estamos 
escuchando ese evento, estamos diciéndole al elemento que cuando ocurra este evento llama a esta función y ejecuta su código. Pero como el 
DOM o el navegador no saben cuándo va a ocurrir ese evento tiene que estar pendiente allí escuchando en caso de que ocurra. Estos serían los 
conceptos más importantes para trabajar con eventos. El elemento targuet que es el que recibe esa acción que desencadena el evento, el 
trigger es el desencadenante o es la acción que desencadena el evento, el Event Handler es la función que va a manejar lo que ocurra cuando 
se desencadena el evento y Event Listener es más o menos como esa conexión que hay entre el evento el elemento y la función que lo va a manejar. 
Normalmente vas a conseguir estos dos términos Event Handler y Event Listener usados en forma equivalente y los términos a veces se intercambian. 
En la mayoría de los contextos puedes usarlos de forma prácticamente equivalente, hay ciertas fuentes que distinguen el Event Listener como 
esa asociación que hay entre el evento y la función y el Event Handler lo espesifican como la función en sí que maneja el evento.
*/
/*
Elementos HTML
*/                          

