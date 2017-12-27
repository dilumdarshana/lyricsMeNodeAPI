// dependacies
const gulp = require('gulp'); // The streaming build system
const nodemon = require('gulp-nodemon'); // it's gulp + nodemon + convenience
const env = require('gulp-env'); // Add env vars to your process.env

// task runner
gulp.task('default', () => {
nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 4000
        },
        ignore: ['./node_moduels/**']
    })
    .on('restart', () => {
        console.log('Restarting...');
    });
});