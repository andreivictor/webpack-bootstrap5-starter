const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    // add more postcss plugins here
    // ...

    // https://www.npmjs.com/package/postcss-preset-env
    // it's including autoprefixer by default
    // pass `autoprefixer: false` to disable autoprefixer
    postcssPresetEnv(),
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: ['./src/**/*.{html,js}'],
          fontFace: true,
          variables: true,
          keyframes: true,
        })
      : false,
  ].filter(Boolean),
};
