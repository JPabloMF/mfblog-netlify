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

## Setting the viewport

HTML5 introdujo un metodo que permitia a los diseñadores web tomar el control sobre el viewport, atraves de la etiqueta `<meta>`

Debes incluir el siguiente elemento viewport `<meta>` en todas tus paginas web:
