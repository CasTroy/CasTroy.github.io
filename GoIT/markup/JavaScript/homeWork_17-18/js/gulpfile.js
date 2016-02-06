var gulp = require('gulp');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
	gulp.src('src/*.js')
		.pipe(concat('all.js'))
		.pipe(jsmin())
		.pipe(rename('js.min.js'))
		.pipe(gulp.dest('dist'));
});