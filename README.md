# Webpack Bootstrap5 Starter

<img src="webpack-bootstrap.png" alt="Webpack Bootstrap5 Starter" />

A starter frontend boilerplate using Webpack 5, Bootstrap 5, SASS, PostCSS, Babel, ESLint, Stylelint, Prettier and more.

## Features

### Webpack

- Latest [Webpack 5](https://webpack.js.org/).
- Separated Webpack configurations per environment: `development` or `production`.
- Fully configured [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) for local development with _Hot Module Replacement_ enabled.
- HTML file to serve your webpack bundles with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).
- Copy files to build directory with [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin).
- Load environment variables from a `.env` file with [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack).
- Analyze output files with an interactive zoomable treemap with [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer).

### Babel

- [Babel 7](https://babeljs.io/) - JavaScript compiler with [`babel-preset-env`](https://babeljs.io/docs/babel-preset-env).

### CSS / SASS / PostCSS

- [SASS](https://sass-lang.com/) support based on [dart-sass](https://www.npmjs.com/package/sass).
- [PostCSS](https://postcss.org/) setup with [`post-preset-env`](https://www.npmjs.com/package/postcss-preset-env), including _autoprefixing_ of browserspecific CSS rules.
- Remove unused CSS with [PurgeCSS](https://purgecss.com/).

### Code style & linters

- JavaScript Linting with [eslint](https://eslint.org/).
- Style Linting with [stylelint](https://stylelint.io/): [`stylelint-config-standard-scss`](https://www.npmjs.com/package/stylelint-config-standard-scss), [`stylelint-config-recess-order`](https://www.npmjs.com/package/stylelint-config-recess-order).
- Automatic code formatting with [Prettier](https://prettier.io/).

### Optimization

- Image optimisation - optimize `jpeg`, `jpg`, `png`, `gif`, `svg` filesize with [imagemin](https://github.com/imagemin/imagemin).
- Optimize and minimize CSS assets with [CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/).

### Additional tools

- Configurable browsers versions support via [browserslist](https://github.com/browserslist/browserslist#full-list).
- Git hooks with [Husky](https://typicode.github.io/husky/).
- Lint commit messages with [Commitlint](https://commitlint.js.org/#/).
- Run linters against staged git files with [lint-staged](https://github.com/okonet/lint-staged).

## Usage

### Development server

```sh
npm start
```

Runs the app in the development mode with hot reloading enabled. \
Open [http://localhost:8080](http://localhost:8080) or server port specified in your `.env` file to view it in your browser.

### Production build

```sh
npm run build
```

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include hashes.

### Code style linters

```sh
npm run lint
```

Runs both `SASS` and `Javascript` code linters.

#### SASS

```sh
npm run css-lint
```

#### Javascript

```sh
npm run js-lint
```

### Code formatting

```sh
npm run prettier:format
```

Runs code formatting with [Prettier](https://prettier.io/).

### Bundle analyzer

```sh
npm run analyze
```

Builds the app for production and creates an interactive treemap visualization of the contents of all your bundles. \
It will start an HTTP server on the default configuration URL `localhost:8888` to show bundle report.

## Requirements

- `node`: `>=18`
- `npm`: `>=8`
