var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	rename = require("gulp-rename"),
	spritesmith = require('gulp.spritesmith');
	concat = require('gulp-concat');
//tasks
gulp.task('sass', function () {
  return gulp.src('src/sass/style.sass')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(minifyCSS())
    .pipe(rename("style.css"))
    .pipe(gulp.dest('src/css'));
});
gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/sprites/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 30
  }));
  return spriteData.pipe(gulp.dest('src/img'));
});
gulp.task('concat', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css'));
});
//build all procject
gulp.task('default', function() {	
	gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
    gulp.src('src/css/style.min.css')
    .pipe(gulp.dest('build/css'));
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js'));
    gulp.src('src/fonts/eox2/Exo2-Regular.otf')
    .pipe(gulp.dest('build/fonts/eox2'));
    gulp.src('src/img/*')
    .pipe(gulp.dest('build/img'));
});


 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/style.sass', ['sass']);
});