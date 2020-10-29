
1.	Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar.
![1](/READMEIMG/1.png?raw=true "Title")

2.	Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).

La API escogida para el trabajo es “The MealDB” https://www.themealdb.com/ 
Este API no requiere de una llave para su uso.

3.	Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube”

Usuario de GitHub: FlorencioP
Repositorio de la Practica: https://github.com/FlorencioP/Practica00-Consumo-de-APIs-en-la-nube 

4.	Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar toda la información disponible a través de la API.

Empezamos explicando el código utilizado para el HTML.
Es un código simple de una sola pagina donde mostramos dos botones iniciales para que el usuario decida buscar por nombre o hacer una consulta aleatoria, al hacer click en cualquiera de las dos opciones de las cuales cuando el usuario ingresa algo que quiere buscar, el resultado se muestra en una tabla que se muestra en un div 
 ![2](/READMEIMG/2.png?raw=true "Title")

Ahora pasamos a explicar el CSS, este solo contiene el modelo de las tablas y también el fondo usado en la pagina 
   
   
![3](/READMEIMG/3.png?raw=true "Title")
![4](/READMEIMG/4.png?raw=true "Title")
![5](/READMEIMG/5.png?raw=true "Title")
![6](/READMEIMG/6.png?raw=true "Title")
![7](/READMEIMG/7.png?raw=true "Title")


Ahora con lo que viene siendo el javascript, Lo que se hace en este es recoger la información del API usado, guardarlo y luego enviarlo hacia la pantalla de usuario. Se hace uso de variables universales para guardar la información que se consigue a través del API. Una vez explicado esto, explico también los métodos usados, como dije anteriormente, se puede buscar por nombre y también de manera aleatoria, estas dos son posibles gracias a propio API. Así que simplemente se cambia el enlace de búsqueda para estas dos funciones.

Aquí se muestra el enlace para búsquedas aleatorias.
![8](/READMEIMG/8.png?raw=true "Title")
![9](/READMEIMG/9.png?raw=true "Title")

![10](/READMEIMG/10.png?raw=true "Title")


Aquí en cambio se muestra el enlace para búsquedas: 
![11](/READMEIMG/11.png?raw=true "Title")

![12](/READMEIMG/12.png?raw=true "Title")


Y por ultimo se muestra el código usado para la paginación
![13](/READMEIMG/13.png?raw=true "Title")


Las dos funciones anteriormente mostradas lo único que hacen es recibir la info de la API y ingresarla a un vector llamado “comidas” y se van organizando en comidasHtml 

