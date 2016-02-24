const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

gulp.task('babel', () => {
	return gulp.src('js/es2015/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js/scripts'));
});

gulp.task('concat', () => {
	return  gulp.src('js/scripts/*.js')
	.pipe(concat('script.js'))
	.pipe(gulp.dest('js/dist'));
});