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
Acceder al texto de un elemento:
Al igual que podemos acceder a l texto al contenido de ese elemento, también podemos modificarlo. Vamos a obtener el elemento titilo y vamos a 
cambiar su contenido y verificamos con la herramienta de Chrome en la consola  const modificarTitulo = document.getElementById("titulo"); y 
efectivamente tenemos el título h1 y si obtenemos su valor innerText vamos a obtener toppings de pizza, digamos que queremos cambiar ese texto como 
tal, lo que hacemos en ese caso es asignar una cadena de caracteres a la propiedad .innerText digamos que optamos por “Mis toppings favoritos”  
Verificamos en consola y podemos ver el cambio realizado con el nuevo texto. Simplemente se modificó el texto de ese elemento en el DOM con una 
sola línea de código→ titulo.innerText = "Mis toppings favoritos"; 
titulo = document.getElementById("titulo");
*/
console.log(titulo);
console.log(titulo.innerText);
titulo.innerText = "Mis toppings favoritos"; /*Se modifico el titulo h1 */