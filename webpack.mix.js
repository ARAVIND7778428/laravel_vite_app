const mix = require('laravel-mix');

mix
    .js('resources/js/script.js', 'pubic/js')
    .css('resources/css/style.css', 'public/css')
    .options({
        processCssUrls: false
    })
    .version();