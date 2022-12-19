---
template: BlogPost
path: /css/responsive
date: 2022-12-14T20:38:29.128Z
title: "\U0001F1EA\U0001F1F8 Responsive design"
metaDescription: Learn about responsive web design
thumbnail: ''
---
## Que es responsive web design?

Responsive web design hace que nuestras paginas web luzcan bien en todos los dispositivos

Responsive web design usa unicamente HTML y CSS.

Responsive web design no es un programa o codigo javascript.

## Diseñando la mejor experiencia para todos los usuarios

Las paginas web pueden ser visualizadas desde diferentes dispositivos:

* Escritorio
* Tablets
* Telefonos moviles

Tu pagina web debe poder lucir bien, y ser facil de usar sin importar el dispositivo.

Las paginas web no deberian perder informacion para ajustarse a dispositivos mas pequeños, sino que deberian adaptar su contenido para que se vea bien en cada dispositivo.

![responsive](/assets/Untitled.png)

Para entender mejor el desarrollo de web responsivas vamos a revisar los siguientes temas:

1. Viewport
2. Grid view
3. Media Queries
4. Images
5. Videos
6. Frameworks
7. Templates

Sé que parece un poco largo pero tratare de ser lo mas claro y consiso posible para no aburrirte.

## Viewport

El viewport es el area visible de una pagina web para un usuario.

![](/assets/Untitled(1).png)

El viewport varia con el dispositivo, y sera mas pequeño en un telefono movil que en una pantalla de una de computadora.

Antes de las tables y los telefonos mobiles, las paginas web eran diseñadas unicamente para pantallas de computadora, y era comun para las paginas web tener un diseño estatico y un tamaño fijo.

Despues, cuando empezamos a navegar el internet usando tables y dispositivos moviles, las paginas web con tamaños fijos eran demasiado grandes para caber en la vista del dispositivo.

Esto no estaba bien, pero surgio una solución rapida.

### Configurando el viewport

HTML5 introdujo un metodo que permitia a los diseñadores web tomar el control sobre el viewport, atraves de la etiqueta `<meta>`

Debes incluir el siguiente elemento viewport `<meta>` en todas tus paginas web:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

Esto le da al navegador instrucciones de como controlar las dimenciones y la escala de las paginas.

El `width=device-width` establece el ancho de la pagina, seguido de `screen-width` que se refiere al ancho del dispositivo (puede variar dependiendo del dispositivo).

El `initial-scale=1.0` establece el nivel de zoom inicial cuando la pagina es cargada por primera vez por el navegador.

Aqui hay un ejemplo de una pagina ***sin*** la etiqueta meta viewport, y la misma pagina ***con*** la etiqueta meta viewport:

![](/assets/Untitled(2).png)

### Tamaño del contenido al viewport

Los usuarios usualmente hacen scroll en las paginas de forma vertical tanto en escritorio como en dispositivos moviles - pero no horizontalmente!

Entonces, si un usuario es forzado a hacer scroll horizontal, o a disminuir el zoom, para ver la pagina completa esto resulta en una experiencia de usuario pobre.

Algunas reglas adicionales a seguir:

1. **No uses elementos grandes de tamaño fijo**

   1. Por ejemplo, si una imagen es mostrada con un ancho mas ancho que el viewport esto puede causar que el viewport tenga un scroll horizontal. Recuerda ajustar el contenido para que encaje con el ancho del viewport.
2. **No dejes que el contenido dependa de un ancho de viewport en particular para mostrarse bien**

   1. Dado que las dimensiones de la pantalla y el ancho en pixeles de CSS varian ampliamente entre dispositivos, el contenido no deberia depender de un ancho de viewport en particular para mostrarse bien
3. **Usar media queries de CSS para aplicar diferentes estilos para pantallas pequeñas y grandes**

   1. Aplicando anchos grandes con CSS para los elementos de una pagina causara que el elemento sea demasiado ancho para el viewport en un dispositivo pequeño. En su lugar, considere usar valores de anchos relativos, tal como `width: 100%`. Tambien, sea cuidadoso con el uso de grandes valores de posicionamiento. Esto puede causar que un elemento se vaya por fuera del viewport en dispositivos pequeños.

## Grid-View

Que es una grid-view?

Muchas paginas web estan basadas en un grid-view, lo que significa que la pagina esta dividida en columnas:

![](/assets/Untitled(4).png)

Usar un grid-view es bastante util al momento de diseñar paginas web. Este lo hace mas sencillo al momento de posicionar los elementos en la pagina.

![](/assets/Untitled(3).png)

Un responsive grid-view a menudo tiene 12 columnas, y tiene un ancho total del 100%, y se reducirá y expandirá a medida que cambia el tamaño de la ventana del navegador.

Podemos tambien crear nuestro propio grid system pero no quisiera extender este blog, por lo que dejare como referencia el siguiente link que explica como construir uno:

[](https://www.w3schools.com/css/css_rwd_grid.asp)<https://www.w3schools.com/css/css_rwd_grid.asp>

Tambien existen otras herramientas que nos proveen de un grid system tales como:

* [boostrap](https://getbootstrap.com/)
* [tailwind](https://tailwindcss.com/)
* [semantic](https://semantic-ui.com/)

Hablaremos un poco mas de grid system en un futuro blog.

## Media Queries

### Que es un Media Query?

Media query es una tecnica de css introducida en CSS3.

Este usa la regla de `@media` para incluir un bloque de propiedades de CSS unicamente si una cierta condicion es verdadera.

**Ejemplo**

Si la ventana del navegador es de `600px` o mas pequeña, el `background-color` se tornara azul claro
