var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var rename = require("gulp-rename");


gulp.task('sass', function () {
  return gulp.src('src/sass/style.sass')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(minifyCSS())
    .pipe(rename("style.css"))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/style.sass', ['sass']);
});