# covid-19-tracker-lao

COVID-19 Tracker in Lao language

## About this project

This is a personal project that I built as a hobby during COVID-19 pandemic. You can try building yourself one!

It was first built with Vue.js & Buefy, components library for Vue based on Bulma. Later, I replaced Buefy with Vuetify.

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Analyse Webpack bundle

It automatically run the analyser after building. To disable the analyser, add following command into `vue.config.js`.

```js
module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
};
```

For more information, please visit its [documentation](https://github.com/mrbbot/vue-cli-plugin-webpack-bundle-analyzer).

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
