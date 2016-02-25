'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify');

 
gulp.task('sass', function () {
  return gulp.src('sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
 
gulp.task('sass:watch', function () {
	gulp.watch('sass/style.sass', ['sass']);
});