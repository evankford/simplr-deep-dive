const mix = require('laravel-mix');
const tailwindcss = require("tailwindcss");
require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-purgecss');
require('laravel-mix-copy-watched');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./dist')
   .browserSync('https://crystalball.local');


mix
  .sass("resources/assets/styles/app.scss", "styles")
  .sass("resources/assets/styles/editor.scss", "styles")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")]
  })
  .purgeCss({
    whitelist: ["iframe-wrap", ...require("purgecss-with-wordpress").whitelist],
    folders: ["app", "views", "scripts"],
    extensions: ["html", "js", "php"],
    whitelistPatterns: [
      /icon/,
      /basicLightbox/,
      ...require("purgecss-with-wordpress").whitelistPatterns
    ]
  });


mix.js('resources/assets/scripts/app.js', 'scripts')
   .js('resources/assets/scripts/customizer.js', 'scripts')
   .blocks('resources/assets/scripts/editor.js', 'scripts')
   .extract();

mix.copyWatched('resources/assets/images/**', 'dist/images')
   .copyWatched('resources/assets/fonts/**', 'dist/fonts');

mix.autoload({
  jquery: ['$', 'window.jQuery'],
});

mix.options({
  processCssUrls: false,
});

mix.sourceMaps(false, 'source-map')
   .version();
