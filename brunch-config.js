exports.config = {
    paths: {
        watched: ['src'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.min.js': /^src\/vendor/,
                'js/app.min.js': /^src\/js/
            },
            order: {
                before: [
                    'src/vendor/angular.min.js',
                    'src/vendor/angular-cookies.min.js',
                    'src/vendor/angular-ui-router.min.js',
                    'src/vendor/md5.min.js',
                    'src/js/app.js',
                    'src/js/**/*.md.js',
                    'src/js/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: 'css/app.min.css'
        },
        templates: {
            joinTo: {
                'js/templates.js': /^src\/js/
            }
        }
    },
    npm: {
        enabled: false
    },
    conventions: {
        assets: /static[\\/]/
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        /*jshint -W106 */
        angular_templates: {
            module: 'app.views',
            path_transform: function(path){
              'use strict'
              return path.replace('src/', '')
            }
        }
        /*jshint +W106 */
    }
}