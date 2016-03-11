var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch');
 

gulp.task('sass', function () {
  return gulp.src('src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("style.main.css"))
    .pipe(gulp.dest('src/css'));
});
 


gulp.task('sass:watch', function () {
  gulp.watch('src/sass/style.sass', ['sass']);
});