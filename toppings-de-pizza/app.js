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
*/                    
