'use strict'

var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	rename = require("gulp-rename"),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
  uglify = require('gulp-uglify');


gulp.task('sass', function () {
  	return gulp.src('../sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss(''))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('../css'));
});

gulp.task('scripts', function(){
  return gulp.src(['../js/script.js','../js/data.json.js', '../js/lodash.js'])
  .pipe(concat(' '))
  .pipe(uglify())
  .pipe(rename('script.min.js'))
  .pipe(gulp.dest('../js/'));
});

gulp.task('watch', function () {
  gulp.watch('../sass/style.sass', ['sass']);
});