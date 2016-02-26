'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');
 
gulp.task('sass', function () {
  return gulp.src('../../scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});

gulp.task('watch', function () {
  gulp.watch('../../scss/style.scss', ['sass']);
});