/*
Seleccionar Elementos
En VSC abrimos nuestro archivo js y solo vamos a trabajar con html y JS al estar vinculados index.html con app.js vamos 
a poder tener acceso a su DOM en la aplicación.  En esta parte veremos cómo podemos seleccionar elementos del DOM para 
tener accesos a sus propiedades y en general a todos sus métodos, el primer paso es seleccionar ese elemento con JS. 
Al tener live server activado vemos el proyecto en el Browser. De esta forma vamos a ver el resultado de lo que escribamos 
en JS en la consola del Browser. La consola es una herramienta que nos permite ejecutar código de JS pero también nos va a 
permitir ver el resultado de nuestro código JS si usamos console.log, cuando abrimos la consola para que sea mas fácil 
poder verla mientras tengo todas las herramientas a la misma vez hacemos click en los tres puntos y luego seleccionamos 
el primer icono de la izquierda Dock side significa que vamos a separar esas herramientas de chrom para tener todo abierto 
al mismo tiempo, luego vamos a console y se abre la herramienta la cual ubicamos convenientemente. 
Sorprendentemente puedes seleccionar un elemento del DOM simplemente usando un método espesifico→.getElementByld() en 
español significa obtener elemento por el id. Si nosotros tenemos en nuestro archivo html un elemento div que contiene un 
id espesifico→contenedor según las reglas de html debería ser único por página web por archivo html asique vamos a poder 
seleccionar cada uno de sus elementos a partir de su id. Es muy similar a definir una constante, Si queremos obtener ese 
elemento del contenedor definimos una constante porque una vez que lo obtenemos no lo vamos a cambiar. Le Definimos un 
nombre y luego usamos un objeto especial llamado document ese obj especial que nos da acceso el navegador  nos va a 
permitir llamar al método .getElementByld() y luego dentro de los paréntesis tenemos que especificar entre comillas el 
id que queremos seleccionar contenedor en este caso, así que lo vamos asignar a esta constante definida y la vamos a usar 
con console.log () para poder ver el valor de la constante contenedor. Como estamos mostrando el valor de contenedor, el 
obj retornado por el método.getElementByld(), si vamos a las herramientas de chrom podemos ver en la consola que tenemos 
un resultado <div contenedor> ese es el elemento html que pedimos con ese metodo es un div que tiene el id contenedor y 
puedes ver que tiene muchas propiedades diferentes. Como estamos obteniendo ese contenedor vamos a poder acceder a sus 
propiedadades y métodos. Una de sus propiedades es→innerHTML  console.log(contenedor.innerHTML); esa propiedad nos da 
acceso a la estructura HTML que está contenida dentro de ese elemento html que están contenidos dentro del div, desde el 
título hasta la lista no ordenada que simplemente es mostrado como una cadena de caracteres. En la consola puedes verlo si 
agregas a console.log(tipeof contenedor.innerHTML) devuelve una string. 
 */
const contenedor = document.getElementById("contenedor");
console.log(contenedor.innerHTML); 
/*
En este caso estábamos trabajando con un contenedor, veamos qué ocurre si intentamos seleccionar un elemento como 
por ejemplo el título, el elemento h1. Veamos que obtenemos  
*/          

const titulo = document.getElementById("titulo");
console.log(titulo);