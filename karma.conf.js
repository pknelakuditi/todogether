module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers : ['Chrome'],
        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-messages/angular-messages.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/app.js',
            'app/save/*.js',
            'app/partials/*.js'
        ],

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};