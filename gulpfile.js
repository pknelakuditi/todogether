var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


// Runs server
gulp.task('develop', function() {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    });
});

