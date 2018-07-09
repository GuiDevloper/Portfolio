var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Default task - Run with command 'gulp'
gulp.task('default', function() {
  console.log('Gulp funcionando...');
});

/* Variaveis */
// Fonte do Sass
var sassFile = './src/Sass/style.sass';
// Destino do CSS compilado
var cssDest = './CSS';

// Opções para produção - compresso
var sassProdOptions = {
  outputStyle: 'compressed'
}

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sass', function() {
  return gulp.src(sassFile)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Vigia Global
gulp.task('watch', function() {
  gulp.watch(sassFile , ['sass']);
});