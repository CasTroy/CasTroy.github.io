var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
 	uglify = require('gulp-uglify'),
 	concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('src/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("style.main.css"))
    .pipe(gulp.dest('src/css'));
});


gulp.task('concat', function() {
  return gulp.src(['src/css/style.main.css', 'src/css/owl.carousel.css'])
    .pipe(concat('all.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css/'));
});

gulp.task('concat:ie', function() {
  return gulp.src(['src/css/ie8-style.css', 'src/css/owl.carousel.css'])
    .pipe(concat('ie.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css/'));
});


gulp.task('sass:watch', function () {
  gulp.watch('src/sass/style.sass', ['sass']);
});

gulp.task('default', function() {
  	gulp.src(['src/css/ie.css', 'src/css/all.css'])
    .pipe(gulp.dest('build/css/'));
    gulp.src(['src/js/all/*'])
    .pipe(gulp.dest('build/js/all'));
    gulp.src(['src/js/ie/*'])
    .pipe(gulp.dest('build/js/ie'));
    gulp.src(['src/fonts/*'])
    .pipe(gulp.dest('build/fonts'));
    gulp.src(['src/img/*'])
    .pipe(gulp.dest('build/img'));
    gulp.src(['src/index.html'])
    .pipe(gulp.dest('build'));
});