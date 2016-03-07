const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

gulp.task('babel', () => {
	return gulp.src('src/js/es2015/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build/js/scripts'));
});

gulp.task('concat', () => {
	return  gulp.src('src/js/scripts/*.js')
	.pipe(concat('script.js'))
	.pipe(gulp.dest('build/js/dist'));
});

gulp.task('style', () =>{
	return gulp.src('src/css/*.css')
	.pipe(gulp.dest('build/css'));
})
gulp.task('fonts', () =>{
	return gulp.src('src/fonts/*')
	.pipe(gulp.dest('build/fonts'));

})

gulp.task('img', () =>{
 gulp.src('src/img/*')
   .pipe(gulp.dest('build/img'));
})

gulp.task('html', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('build'));
  gulp.src('src/js/*.js')
  .pipe(gulp.dest('build/js'));
})

gulp.task('default', ['babel', 'concat', 'style', 'img', 'fonts', 'img', 'html'], function(){
 
})
/*






*/