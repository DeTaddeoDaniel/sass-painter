let mix = require('laravel-mix');

// mix.js('src/app.js', 'dist');
mix.js('src/app.js', 'dist').vue();

mix
   .sass('src/scss/jumbotron.scss', 'dist')
   .sass('src/scss/card.scss','dist')
   .sass('src/scss/style.scss', 'dist')
   .options({
        processCssUrls: false
   });
