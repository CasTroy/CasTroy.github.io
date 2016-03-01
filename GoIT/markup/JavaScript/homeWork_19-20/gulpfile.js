'use strict'

var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	rename = require("gulp-rename"),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
  uglify = require('gulp-uglify');

  


var urls = {
  script : ['src/js/script.js', 'src/js/data.json.js'],
  vendor : ['src/js/jquery-2.2.1.js', 'src/js/lodash.js', 'src/js/jquery.blueberry.js']
}

gulp.task('sass', function () {
  	return gulp.src('src/style/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss(''))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/'));
});

gulp.task('scripts', function(){
  return gulp.src(urls.script)
  .pipe(concat(' '))
  .pipe(uglify())
  .pipe(rename('script.min.js'))
  .pipe(gulp.dest('build/'));
});

gulp.task('vendor', function(){
  return gulp.src(urls.vendor)
  .pipe(rename('vendor.js'))
  .pipe(concat(' '))
  .pipe(uglify())
  .pipe(rename('vendor.min.js'))
  .pipe(gulp.dest('build/'));
})



gulp.task('watch', function () {
  gulp.watch('src/style/style.sass', ['sass']);
});