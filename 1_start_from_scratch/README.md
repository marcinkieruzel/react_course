### Lets start from scratch

1. Utwórz plik package.json `npm init`.
2. Zainstaluj zależności: `npm install react react-dom`
3. Dodaj webpack `npm install -save-dev webpack webpack-cli`
4. Następnie zajmijmy się transpilacją kodu. Użyjemy do tego webpack `npm install --save-dev babel-loader` z odpowiednimi presetami `npm install --save-dev @babel/core @babel/preset-react`
5. Możemy skonfigurować je w pliku `webpack.config.js` wygodniej jednak użyć pliku `.babelrc`:

```json
{
  "presets": ["@babel/preset-react"]
}
```

6. Konfiguracja `webpack.config.js`.

```javascript
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
```

7. Dodajmy HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React From Scratch</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- The bundle-name should be same as you defined in webpack config file -->
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

8. Deklaracja React

```javascript

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```
Więcej: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

9. Dodajemy typescript `npm install --save-dev typescript ts-loader @types/node @types/react @types/react-dom @types/jest`

10. Deklaracja typescript w pliku webpack'a:

```javascript
 module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
```

opcje typescript tsconfig.json

```javascript
{
"compilerOptions": {
  "allowSyntheticDefaultImports": true,
  "esModuleInterop": true,
  "outDir": "./dist/",
  "noImplicitAny": true,
  "module": "es6",
  "target": "es5",
  "jsx": "react",
  "allowJs": true,
  "moduleResolution": "node"
}
}
```


