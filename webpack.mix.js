const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .webpackConfig({
        resolve: {
            extensions: ['.ts', '.tsx', '.json'],
            alias: {
                "components": __dirname + "/resources/ts/components",
                "data": __dirname + "/resources/ts/data",
                "images": __dirname + "/resources/ts/images",
                "pages": __dirname + "/resources/ts/pages"
            }
        }
    })
    .ts('resources/ts/app.tsx', 'public/js')
    .sass('resources/scss/app.scss', 'public/css');
