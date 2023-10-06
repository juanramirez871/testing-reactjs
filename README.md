# React + Vite + Jest

Vite es una avanzada herramienta de desarrollo web que combina un servidor de desarrollo rápido con un sistema de compilación eficiente. Su objetivo es proporcionar una experiencia de desarrollo simple, flexible y fácil de usar.

## Instalación de Vite:

El proceso de instalación comienza con la creación de un nuevo proyecto (asegurándote de tener Node.js instalado) y la apertura de la consola en la ubicación del proyecto. Luego, ejecutas el siguiente comando en la consola:

```bash
npm create vite
```

Esto abrirá un asistente que te permitirá definir el nombre de tu proyecto. Después de ingresar el nombre, se presentará una lista de frameworks que puedes utilizar con Vite. En este caso, estaremos trabajando con React, y la variante que elegiremos será JavaScript + SWC.

Luego, para poner en marcha la aplicación, navega al directorio creado con el nombre de tu proyecto y ejecuta:

```bash
npm install
```

Esto instalará las dependencias de Node. Una vez completada la instalación, puedes iniciar el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

De esta manera, tendrás tu servidor en funcionamiento. Por defecto, Vite crea una aplicación básica con un icono de Vite y React, así como un contador en el centro. Si el servidor local funciona y puedes ver estas vistas, significa que la instalación y configuración inicial de Vite ha sido exitosa.

## Instalación de Jest

Jest es un framework de pruebas de JavaScript de código abierto desarrollado por Facebook. Ofrece un conjunto completo de herramientas que incluye una biblioteca de aserciones, un corredor de pruebas y soporte para pruebas unitarias, de integración y de aceptación.

Jest es una elección sólida para probar aplicaciones React, ya que está especialmente diseñado para este propósito. Sin embargo, también se puede utilizar para probar cualquier aplicación JavaScript.

Para obtener instrucciones detalladas sobre cómo instalar Jest, puedes consultar la [documentación oficial de Jest](https://jestjs.io/docs/getting-started). A continuación, se presentan los pasos para instalar Jest en tu proyecto:

En primer lugar, instala Jest utilizando el siguiente comando:

```bash
npm install --save-dev jest
```

Además, instala Babel, que es un compilador JavaScript utilizado para transformar código moderno en JavaScript compatible con navegadores antiguos y entornos no compatibles. Esto es necesario para manejar las características de ECMAScript 2015+ como clases, módulos, promesas y funciones flecha. Puedes instalar Babel de la siguiente manera:

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Luego, crea un archivo de configuración de Babel llamado `babel.config.cjs` en el directorio raíz del proyecto con el siguiente contenido:

```javascript
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

Finalmente, instala la última dependencia necesaria desde la biblioteca de Jest:

```bash
npm install --save-dev @types/jest
```

Para habilitar la ejecución de pruebas, agrega el siguiente script en el archivo `package.json` bajo la sección "scripts":

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "test": "jest --watchAll"
}
```

Con esta configuración, estás listo para realizar pruebas en tu proyecto. Para ejecutar las pruebas, abre dos consolas: una para ejecutar `npm run dev` y otra para `npm run test`. En la consola de pruebas, podrás ver los resultados de las pruebas.

## Creación de las Pruebas

Para crear pruebas, sigue estos pasos:

1. Crea una carpeta llamada `test` en la estructura de carpetas de tu proyecto.

2. Crea una carpeta de ejemplo, por ejemplo, `version`, donde se almacenarán los archivos que deseas probar. También puedes aplicar este procedimiento a los componentes para garantizar su correcto funcionamiento.

3. Dentro de la carpeta de pruebas (`test`), agrega archivos que correspondan a los archivos que deseas probar en la carpeta `version`. Asegúrate de nombrar los archivos de prueba con el formato `nombre.test.js` para que Jest los identifique automáticamente como pruebas.

Siguiendo estos pasos y configurando adecuadamente las pruebas, podrás ver en la consola de pruebas qué pruebas han sido aprobadas y cuáles no.

¡Ahora estás listo para realizar pruebas en tu proyecto React con Vite y Jest!
