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
    .pipe(gulp.dest('build/css/'));
});

gulp.task('scripts', function(){
  return gulp.src(urls.script)
  .pipe(concat(' '))
  .pipe(uglify())
  .pipe(rename('script.min.js'))
  .pipe(gulp.dest('build/js/'));
});

gulp.task('vendor', function(){
  return gulp.src(urls.vendor)
  .pipe(rename('vendor.js'))
  .pipe(concat(' '))
  .pipe(uglify())
  .pipe(rename('vendor.min.js'))
  .pipe(gulp.dest('build/js/'));
})

gulp.task('img', function() {
  gulp.src('src/img/logos/*')
  .pipe(gulp.dest('build/img/logos'));
  gulp.src('src/img/photos/*')
  .pipe(gulp.dest('build/img/photos'));
  gulp.src('src/img/slides/*')
  .pipe(gulp.dest('build/img/slides'));
  gulp.src('src/img/*')
   .pipe(gulp.dest('build/img'));
});

gulp.task('fonts', function() {
  gulp.src('src/fonts/ubuntu/*')
  .pipe(gulp.dest('build/fonts/ubuntu'));
});

gulp.task('html', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('build'));
})

gulp.task('default', ['vendor', 'sass', 'scripts', 'img', 'fonts', 'html'], function(){
 
})

gulp.task('watch', function () {
  gulp.watch('src/style/style.sass', ['sass']);
});