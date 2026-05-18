# web2

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

 El toolbar debe ofrecer además a la Izquierda de las opciones del toolbar, select buttons con 
“EN” y “ES” para el switching de idioma. 
• Un Toolbar, donde se muestra a la Derecha el logo de Ukio (para ello utilice el servicio de 
Clearbit Logo API) y a continuación el texto “Find your Home”. 
• En el Toolbar, al centro se muestra las opciones “Home”, “Apartment”. 
• La vista Home muestra como título el texto “Ukio Cities” y como contenido el texto “Feel at 
home wherever you go”. 
• Dentro de la vista Home se muestra una sección con el título “Ukio Cities” donde se presenta un 
grid de 1 fila, dentro de cada columna se colocará una ciudad. Cada ciudad se mostrará en un 
card.   
• En el componente el card de cada ciudad contendrá en la sección header con el cityName. En la 
sección content debe estar el campo description y population. En la sección footer debe 
mostrarse el indicador Quantity of Aparment. 
• El indicador Quantity of Aparment muestra la cantidad de Aparments que hay actualmente para 
esa city. 
Página 2 de 6 
Downloaded by Mauricio Castillo (mauscasyat@gmail.com)
lOMoARcPSD|59427128
• La vista Apartment, muestra una vista con el título “Rent Apartment” y debajo la lista de card 
con los Apartment. Cada Aparment mostrara los campos siguientes name, description, 
numberParking, numberBedroom y Price con un botón donde Rent. 
• Cuando presione el botón Rent, abrirá un panel con un form conteniendo un input text field con 
el label Description, un Datepicker donde se podrá ingresar la “start Date” y otro DatePicker para 
la “end Date” con un botón “make a rent”.  Cuando el usuario presiona el botón y la fecha de 
inicio y fecha de fin están llenas el sistema mostrara un alerta tipo confirm para confirmar el 
registro.  En caso no se encuentre el campo fecha se deberá mostrar el mensaje “Completing the 
quantity field is mandatory”. 
• En caso se confirme el alquiler se deberá actualizar en el fake api Apartment los campos startDate, 
endDate y state(state se actualizar con el valor C = Completed). 
• Considere una vista de tipo page-not-found para el caso de rutas de navegación no soportadas. 
Dicha vista debe mostrar un mensaje incluyendo la ruta especificada que no se encontró y debe 
ofrecer un botón para retornar a City. 
• La vista Home es accesible desde la ruta de navegación /home. 
• La vista Aparment es accesible desde la ruta de navegación /properties/renting/new. 
• La vista raíz (accesible desde la ruta de navegación /) debe redirigir al usuario a la vista /home.  
• La interfaz de usuario debe estar disponible en inglés y español, siendo inglés el idioma por 
defecto. 
• La interfaz de usuario debe utilizar uno de los tres presets de PrimeVue: Aura, Lara o Nora. 

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
