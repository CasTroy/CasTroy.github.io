var gulp = require('gulp');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var minifyCss= require('gulp-minify-css');
 
gulp.task('js', function () {
	gulp.src('src/*.js')
		.pipe(concat('all.js'))
		.pipe(jsmin())
		.pipe(rename('js.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
	gulp.src('../css/*.css')
		.pipe(concat('all.js'))
		.pipe(minifyCss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('dist'));
});