const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const pug = require('gulp-pug');
//const less = require('gulp-less');
const aliasify = require('aliasify');
//const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat'); 
const sourcemaps = require('gulp-sourcemaps');
const eslintify = require('eslintify');
const babelify = require('babelify');
const uglify = require('gulp-uglify-es').default;

/*gulp.task('css', function(){
	return gulp.src(files + 'css/app.less') 
		.pipe(less())
		.pipe(minifyCSS())
		.pipe((gulp.dest('./public/css')))
});*/

gulp.task('js', function(){
	return gulp.src('js/app.js')
		/*.pipe($.bro({
	      transform: [
	        [eslintify, {'quiet-ignored': true}], babelify
	      ],
	      error: $.notify.onError('Error: <%= error.message %>'),
	      debug: true
	    }))*/
		.pipe(sourcemaps.init())
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function(){
	gulp.watch('js/**/*.js', ['js']);
	//gulp.watch(files + 'css/**/*.less', ['css']);
});

gulp.task('default', ['js', 'watch']);