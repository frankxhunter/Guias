  # Master Javascript con dalto

  # Como definir una propiedad en un objeto
  Esto es para agregarle una propiedad a un objeto que no tenia
  ```
  let obj = {};
  Object.defineProperty(obj, "name", {value: "pedro"})
  ```
  Si ademas quieres añadirle que dicha propiedad no se pueda modificar y sea solo de lectura:

  ```
  Object.defineProperty(obj, "name", {value: "pedro"}, writeable: false)
  ```

  ## Como prevenir q se definan nuevas propiedades a un objeto
  ``` 
  let obj = {}
  Object.preventExtensions(obj);
  ```

  ## Como eliminar propiedades
  Usando la keyword delete, esto solo esta permitido para las propiedades no para variables ni funciones
  ```
  let obj={name: "hola"};
  delete obj.name;
  ```

  ## Strict mode
  El strict mode es una funcionalidad de javascript q no omite errores ni malas practicas comunes, y las convierte en excepciones
  Solo funciona al principio del bloque
   
  ### Como usarlo
  Poner al principio del archivo la siguiente linea

  ``` "use strict";  ```

  ### Que no permite el modo estricto
  
  - No permite omitir el tipo de varible, hay q especificar si es let, var, const
  - Lanza excepciones si se intenta modificar propiedaesd o agregarlas cuando no esta permitido
  - No se pueden agregar propiedades a los string
  - No permite q las funciones tengan parametros duplicados osea con el mismo nombre
  - No permite que delete sea utilizado en variables o funciones
  - No permite usar palabras reservadas como variables  
  - No permite usar el this fuera de contexto
  - Los numeros octales tienes q usar una "o" ejemplo: pasa de 023 a 0o23
  - No existe el whith
  - Argument y eval no pueden ser variables 

  
  ## Funciones flecha
  ### Diferencias de funciones comunes
    - Mas cortas de usar
    - El funcionamiento del this cambia, pq hace referencia al objecto que llama al metodo q llama al metodo, comunmente es window
    - No se recomiendan usar como metodos en objetos o clases
    - No puede ser utilizado como constructor

  ### Sintaxis
  const hola = ()=>{console.log("HOLA")}

  #### Tip de sintaxis
  - Si es un solo parametro no requiere parentisis 
  - Si es una sola linea de codigo no requiere llaves y ademas retorna el valor automaticamente

  ### Parametros omitidos
  Para omitir parametros en la llamada de una funcion se puede establecer el valor de dicho parametro de la siguiente forma

    ```
      const add = (a, b=19)=>{
    return a+b;
  }
  console.log(add(10))// 29
    ```
  ### Parametros Rest 
  Esto te permite q tu funcion reciba todos los parametros necesarios, no debe tener parametros despues dado q es infinito, por tanto debe ser siempre el ultimo 
     ```
    const add = (...args)=>{
    return args;
  }
  console.log(1,2,3)// [1,2,3]
    ```
    Los tres punticos se llaman operador Spread 


## Operador ...Spread
Sirve para destructurar una array
```
    let array[1,2,3];
    let array2[4,5,6];
    array.push(...array2);//[1,2,3,4,5,6]
``` 

## Temporizado
Esto permite llamar a una funcion cada un tiempo determinado

``` 
setInterval(nombreFuncion(), 1000) // nombre de la funcion y el tiempo q tardara en actualizarce
```


# APIs de Javascript
 
 ## Date
 Es una funcion o un contructor, devuelve la fecha actual
 ```
    let date = Date();
    let date2= new Date();//Esta forma permite acceder a las propiedades o metodos utilizados a continuacion
    console.log(date);
    console.log(date2.getDay());
```
Tambien se le puede pasar un numero a Date(10000), representando los milisegundos transcurridos desde la fecha inicial(1/enero/1970), la fecha actual en milisegundos se obtiene con:
- Date.now();
### Metodos
- getDate() //Devuelve el dia del mes
- getDay() //El dia de la semana contando desde 0 a partir del domingo
- getMonth() //El mes empezando a contar desde 0 a partir de enero
- getYear() //El año pero le resta 1900
- getHours() //La hora del dia 
- getMinutes() //Los minutes de la hora
- getSeconds() //Los segundos del minuto


## LocalStorage y SessionStorage
Sirven para almacenar, la diferencia es localstorage se guarda de forma permanente, y sessionstorage solo se almacena en la pagina de forma temporal

### Metodos de localStorage y sessionStorage
- localStorage.setItem("name", "frank"); //Permite guardar un elemento
- localStorage.getItem("name") //Devuelve el valor de esa propiedad
- removeItem("name") //Elimina esa propiedad del almacenamiento
- clear() //Borra todo en el almacenamiento  

## Drag and drop

Esta api permite desplazar y mover objetos en la pagina con el mouse arrastrandolos y soltandolos

### Eventos a manejar

#### Eventos para el objeto q va a ser desplazado
- dragstart: Se activa cuando sostiene el objeto un lo desplazas un poco q se detecta 
- drag: Se esta activando constatemente mientras sostienes el objeto 
- dragend: Cuando finalmente sueltas el objeto

Ejemplo de uso:
box.addEventListener("dragstart",()=>{});

#### Eventos del objeto donde va se va a soltar
- dragenter: detecta cuando el objeto arrastrado entro en este objeto
- dragover: detecta cuando el objeto se mantiene dentro del otro objeto y se activa constantemente
- drop: detecta cuando el objeto fue soltado, para permitir la activacion de este evento hay q permitirlo con e.preventDefault() en dragover
box.addEventListener((e)=>{e.preventDefault();})
- dragleave: detecta cuando el objeto q esta siendo arrastrado sale del objeto receptor

#### DataTransfer
Esto se utiliza para tranferir la informacion correspondiente del objeto q esta siendo arrastrado

##### Forma de utilzarlo
Se debe poner la informacion en datatransfer en el evento dragstart, ademas se utiliza e.target para obtener el elemento
```
box.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("name", e.target)
});
```

Luego en el objeto receptor se obtiene esta informacion

```
box2.addEventListener("drop",(e)=>{
    e.dataTransfer.getData("name")
});
```

Otro forma de utilizarlo cuando se arrastran archivos externos al navegador es la siguiente, en el evento drop, para obtener el o los archivos pones: e.dataTransfer.files[0];


## Geolocation

### Como acceder a tu posicion
Primero se dbe obtener el objeto de la siguiente forma
```
const geo = navigator.geolocation;
```
Una vez hecho ya se puede obtener la posicion con el metodo getCurrentPosicion, este metodo recibe 3 parametros:
- Una funcion con un paramtro q es la posicion
```
const posicion = (pos)=>{
    console.log( pos )
 }
```

- Una funcion en caso de error

- Y un objeto con los ajustes:
```
const options={
    maximumAge: 0, //El tiempo maximo q se guarda dicha posicion en cache
    timeout: 3000, //El tiempo q demorara en responder
    enabledHightAccuracy: true //Para activar la alta precision
}
```

### Como acceder a la posicion en tiempo real
Usar metodo whatchPosition(); 
Investigar en caso de necesitar


## History
Esta api sirve para navegar por el historial 
### Metodos de la api
- history.back() // Hace la misma funcion q el boton de atras
- history.forward() //Hace lo mismo que el bton de siguiente
- history.length  //Ver el tamaño del historial 
- history.go() //Si se deja sin parametros o con un 0 recarga la pagina, sino de redije a la pagina con el numero q le pases segun el historial 
history.pushState({state: "open"}, "title", "?extesion") //Este metodo agrega una entrada al historial modificando la pagina actual, recibe 3 paramtros, un objeto q es el estado, el 2do es el title, y el 3ro es la extension que se agrega a la extension original, se debe poner el "?", 
- history.state //Dice el estado de la pagina q casi siempre es null a menos q haya sido modificado con el metodo anterior  
* Nota: a window se le puede añadir un evento q es "popstate" q detecta cuando se cambio el estado


## FileReader
Es un objeto creado para trabajar con eventos

### Como obtener un archivo 
Para obtener un archivo se utiliza un input file, ademas se utiliza el evento "change" para detectar cuando el archivo cambia

```
const inputFile = document.getElementById("input");
inputFile.addEventListener("change", (e)=>{
    console.log(inputFile.files[0])
})
```
### Eventos 
- load: cuando ya el archivo se cargo 
- progress: mientras el archivo se esta cargando, se activa cada 4%, para obtener su valor: e.loaded


### Metodos
- readAsDataURL() //para imagenes, sonido etc...
- readAsText() // para leer archivos de texto 
- readAsArrayBuffer() //Para otro tipo de archivos como videos

### Ejemplo de como leer un archivo
```
const inputFile = document.getElementById("input");
inputFile.addEventListener("change", (e)=>{
    const file = inputFile.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener("load",(e)=>{
        console.log(JSON.parse(e.currentTarget.result))
    })
})
```

Ahora un ejemplo de como mostrar un video 
```
const loadFileVideo = file=>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.addEventListener("load", (e)=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video"})
        let url = URL.createObjectURL(video);
        let video = document.createElement("VIDEO");
        video.setAttribute("src", url);
        document.querySelector(".result").appendChild(video)
        video.play();
    })
}
```


## IndexedDB
Esto es una base de datos q almacena informacion de forma similar a localstorage, es oritetada a objetos, asincrona, y trabaja con eventos del 
### Como crearla
```
const IDBRequest = window.indexedDB.open("nameDB",1);// esto lo q hace es solicitar abrir la base de datos
```

### Eventos 
- upgradeneeded: se activa cuando se crea la base de datos, aqui es donde se deben poner las tablas
- success: cuando se llama y tiene exito
- error: cuando se llama y hay error

### Como crear el almacen de objetos o las tablas
```
IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("names",{
        autoIncrement: true
    })
})
```
* Nota: existen 2 tipos de key:
- autoIncrement
- KeyPath //Investigar para usar

### CRUD operaciones basicas con la base de dato
Para hacer una operacion en la base de dato se utiliza el metodo transaction y se especifica el almacen que se va a seleccionar y el modo, q puede ser "readwrite" o "readonly" 
Luego hay q obtener el objectStore generado en la transaction
```
const db = IDBRequest.result;
    const IDBTransaction = db.transaction("names", "readwrite");
    const objectStore = IDBTransaction.objectStore("names")
```
#### Create
Para crear un objeto se hace todo lo anterior y ademas: 
```
objectStore.add({name:"Arango"}) // se agrega el objecto
IDBTransaction.addEventListener("complete",()=>{
        console.log("Add success")
    }) //Ademas se puede hacer un evento q avise cuando el objeto fue creado
```

#### Read
Para leer se debe repetir la anterior pero en vez de agregar se debe abrir un cursor, y obtener el objeto leido en cada operacion en el evento success
```
const readAll= (object)=>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("names", "readonly");
    const objectStore = IDBTransaction.objectStore("names")
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value)
            cursor.result.continue();
        }
        else{
            console.log("end")
        }
    })
}
```

### Update 
Los pasos son los mismos q en create, solo cambia que en vez de usar el metodo add, se usa el metodo put, q recibe el objeto y la llave donde se va a colocar
```
const updateObject = (object, key)=>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("names", "readwrite");
    const objectStore = IDBTransaction.objectStore("names")
    objectStore.put(object,key);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("Update success")
    })
}
```

### Delete 
Es lo mismo q el anterior pero se usa el metodo delete, q solo recive la llave del objeto a eliminar
```
const deleteObject = (key)=>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("names", "readwrite");
    const objectStore = IDBTransaction.objectStore("names")
    objectStore.delete(key);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("Delete success success")
    })
}  
```

## matchMedia
La match media es un objecto en javascript al cual se le pasan ciertos media querys, esto se usa para el diseño responsivo, como mismo en css se usa el " @media only screen and (max-width: 500px)" en javascript seria:
```
const mq = matchMedia("(max-width: 500px)");
console.log(mq)

mq.addEventListener("change",()=>{
    console.log(mq.matches)
})
```
Este objecto tiene la propiedad matches, que detecta cuando el se cumple la media query
* Nota: el evento change se activa cada vez que cambia la propiedad matches


* Advertencia: No usar esto para dar estilos, solo para hacer cambios de clases y dar funcionalidades

## Interception observer
Se utiliza para detectar cuando un objeto entra o sale de la pantalla

Primero se debe crear IntesectionObserver y se le pasa por paramtro una funcion flecha q recibe el numero de entrada q estan siendo observadas, luego se dice q objetos van a ser observados
```
const verifyVisibility = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting)
            console.log(entry)
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for (const box of boxes) {
    observer.observe(box);
}
```
Esta funcion se va a llamar siempre q un cambie la propiedad isIntersecting q es la q determina si el objeto esta o no en pantalla

* Nota: new IntersectionObserver() tambien puede recibir un segundo parametro para los ajustes, investigar mas al respecto

## Visibility Change
Se usa para detectar cuando se cambio de ventana

```
addEventListener("visibilitychange",(e)=>{
    if(e.target.visibilityState == "visible"){
        document.write("Y se marchoooooo, y a su barco llamo libertaad");
    }
    else
    alert("Volviste pelotudo")
})
```
Algunos usos de esto es pausar video o juego cuando se cambia de pantalla

## Notifications 
Permite mandar notificaciones desde el navegador

Primero se deben activar los permisos de notificaciones 
```
Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
        new Notification("hola")
    }
});

new Notification("hola")
```

# Web Workers

## Tipos de web Workers

### Dedicated Worker
Esto se utiliza para abrir hilos de ejecucion, lo q hace es ejecutar un archivo de forma paralela
Los web worker no pueden acceder a la interfaz del usuario por lo q metodo comunes como console.log y alert no funcionaran
Para solucionar esto se establece una comunicacion entre el script principal y el web worker

```
// script.js
const worker = new Worker("worker.js")
worker.addEventListener("message",(e)=>{
    console.log(e.data)
})

// worker.js
postMessage("Hola mundo");
```
Tambien puedes enviar informacion desde el script al worker de la siguiente forma:
```
worker.postMessage("Hello Worker");
```

Para cerrar el worker y no permitir que se siga ejecutando se hace lo siguiente:
```
worker.terminate(); 
```
* Nota: Los workers tienen la politica same-Origin q no permite acceder a archivos q tengan otra direccion, osea q no coincida el protocolo-host-puerto, por ejemplo desde el puerto 8080 no se puede cargar un worker del puerto 8082
 


### Shared Worker




### Service Worker 
 Es un archivo q intercepta las peticiones http y hace de mediador
 #### Como crearlo 
 ```
navigator.serviceWorker.register("sw.js");
 ```
Esto accede al alchivo y lo convierte en service worker
#### Eventos del service worker
* Nota: en el service worker para referirse a si mismo se puede usar this pero lo mas comun es usar self



### Abstract Worker


# Objeto Navigator
## Propiedades
console.log(navigator.appCodeName) //Devuelve el nombre del navegador, esta en desuso
console.log(navigator.appName) //Nombre oficial del navegador, en desuso
console.log(navigator.appVersion) //Version de window
console.log(navigator.connection) //Devuelve la informacion del internet
console.log(navigator.geolocation) //Objecto geolocation visto anteriormente
console.log(navigator.hardwareConcurrency) //Cantidad de nucleo del procesador disponibles
console.log(navigator.language) //devuelve el idioma
console.log(navigator.languages) //devuelve los idiomas del navegador
console.log(navigator.mimeTypes) //ver mas en nodejs, esta en desuso
console.log(navigator.onLine) //te dice si estas online o no
console.log(navigator.userAgent) //informacion a acerca del navegador
console.log(navigator.cookieEnabled) //te dice si la cookies estan activadas
console.log(navigator.permissions) // permisos concedidos 
console.log(navigator.platform) // te dice en que plataforma estas, esta en desuso
console.log(navigator.plugins) //te devuelve un array con todos los puglins instalados del navegador
console.log(navigator.product) // devuelve gecko, para problemas de compatibilidad, esta en desuso
console.log(navigator.serviceWorker) //te devuelve el service worker, ver mas en su propio apartado

## Metodos()
//navigator.getUserMedia() // ya no se usa, buscar alternativas
console.log(navigator.javaEnabled()) //te dice si java esta disponible en el navegador
console.log(navigator.vibrate()) // realiza una vibracion en el dispositivo si este la tiene disponible 


# Memorization
Se usa para memorizar resultados de funciones y evitar su uso repetitivo 
```
const cache = {};
const memoizer = (func) => {
    return e => {
        const index = e.toString()
        if (cache[index] == undefined) {
            cache[index] = func(e);
        }
        return cache[index]
    }
}
const toDoSomething = num => {
    const a = 20;
    const b = 12;
    let c = 0;
    for (let i = num; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            c += a * b;
        }
    }
    return c;
}
const memo = memoizer(toDoSomething);
```
Ejemplo
```
let date = new Date();
memo(20000);
console.log(new Date() - date) // 403

date = new Date();
memo(200);
console.log(new Date() - date) // 0
```

# Memoria cache 
Es como una base de datos, se utiliza sobre todo para guardar archivos estaticos de forma q no tengan q volverse a cargar y sean mas rapidos
## Como crearla
```
window.caches.open("static-files").then((cache)=>{
    console.log(cache)
})
```

## Metodos que tiene
- cache.add("file") //Recibe la direccion de un fichero y lo almacena, internamente lo que hace es llamar a fetch con el fichero y agregarlo con put

- cache.addAll([un array de ficheros]) // Hace lo mismo que el anterior pero recibe un array de ficheros

- cache.match(request, options*) //  busca en los recursos la primera coincidencia del fichero q esta buscando, devuelve una promise

- cache.matchAll(request, options*) // lo mismo pero con un arreglo de todas las coincidencias, recordar q el parametro options es opcional

- cache.put() //para modificar archivos, mas que nada

- cache.delete(request) //para modificar igual q add, devuelve una promise

- cache.keys(request, options) //devuelve una promise con se resuelve con una matriz de keys de los objetos almacenados

# Cookies
Son datos q se guardan en el navegador

- Estructura de las cookies
clave=valor; atributo;atributo;atributo;...

### Como ver las cookies almacenadas
```
let cookies = document.cookie;
console.log(cookies)
```
Las cookies se crean con key=value, luego se le ponen el resto de propiedades, pero solo se puede acceder a value, las cookies solo pueden almacenar hasta 4kb a diferencia de las sesionStorage y el localStorage que pueden almacenar hasta 5 MB

### Como crear las cookies
- Creacion de una cookie simple con key value
```
document.cookie = "user=frank";
document.cookie = "user=arango";
document.cookie = "hola=adios";
```
- Con mas datos
```
const createCookie = (key, value, exp, path, age) => {
    let cookie = key + "=" + value + ";expires=" + exp + ";path=" + path + ";age=" + age;
    document.cookie = cookie;
}
createCookie("user", "value", "mon 26 apr 2023 12:00:99 UTC, "/" )
```
* Nota: significado de cada parametro:
- exp = fecha de expiracion, si no se pone expira cuando cierra la seccion
- path = ruta donde se guarda, por defecto es "/"
- age = duracion en segundos
Normalmente se usa solo 
 #### Forma mas comoda de usar
 ```
 const createCookie2 = (key, value, dia) => {
    expire = newDateUTC(dia);
    let cookie = key + "=" + value + ";expires=" + expire + ";"
    document.cookie = cookie;
}

function newDateUTC(dias) {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + dias * 24 * 60 * 60 * 100);
    return currentDate.toUTCString();
}
 ```

#### Para obtener las cookies 
* Nota: Esto es un metodo para hacer esto mas facil
```
function getCookies(cookieName){
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1]
        }

    }
}
```

#### Como modificar una cookie
Para modificar una cookie solo hay q reescribirla, osea pasarle la misma key con diferente value

#### Como eliminar una cookie
Solo tienes q modificar la cookie y pasarle la propiedad max-age=0 para q se elimine al momento
```
document.cookie = "token=0; max-age=0" 
```

#### Investigar
Aviso de cumplimiento de reglas:
se le debe preguntar al usuario si se pueden usar las cookies
Investigar: RGPD y ePrivacy


# Screen 

anchoTotal = screen.width //ancho total de la pantalla
alturaTotal = screen.height //altura total de la pantalla

anchoDisponible = screen.availWidth //ancho disponible de la pantalla 
alturaDisponible = screen.availHeight //altura disponible de la pantalla, aqui se resta la altura de la barra de tareas

resolucion = screen.pixelDepth //resolucion de color de la pantalla 
profundidad = screen.colorDepth //profundidad de bits de la paleta de colores

* Nota: a diferecia del innerHeight y el innerWidth

# Canvas
Es un elemento html para hacer graficos

* Nota: Para modificar el witdh y el height es recomendable hacerlo desde el html
```
    <canvas id="canvas" width="500px" height="500px"></canvas>
```

## Metodos
```
const canvas = document.getElementById("canvas");

//Hay q crearle un contexto
const ctx = canvas.getContext("2d");

ctx.lineWidth= "4" //Define el tamaño de la linea q se va a dibujar

ctx.strokeStyle = "#247" //Define el color con el q se realizara el strokeRect

ctx.strokeRect(50,10,400,200);// Para dibujar un cuadrado, los dos primeros parametros son los puntos en (x;y) y los otros dos parametros son witdh y height

ctx.fillStyle = "#287" //Define el color con el q se realizara el fillRect

ctx.fillRect(40,20,400,200) // Lo mismo q el anterior pero este dibuja un cuadrado relleno

ctx.lineTo(100, 300)// Define un punto para trazar la linea (x,y)
ctx.lineTo(250, 476) //Define el otro punto

ctx.lineTo(350, 276) //Define el otro punto

ctx.closePath(); //Hace q la ultima linea se conecte con la primera

ctx.stroke() //Traza la linea de todos punto antes mencionados
ctx.beginPath(); //inicia un nueva punto no asociado al anterior para dibujar una linea distinta
ctx.lineTo(150, 276) 
ctx.lineTo(150, 476) 
ctx.stroke() 

ctx.beginPath();
ctx.arc(200,200, 50,0, 20);//para hacer un circulo, investigar algo mas de los parametros
ctx.stroke() 

```
