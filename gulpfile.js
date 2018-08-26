const gulp = require('gulp');//biblioteca principal
//const $ = require('gulp-load-plugins')();
const pug = require('gulp-pug');
//const less = require('gulp-less');
const aliasify = require('aliasify');
//const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');//biblioteca de minificação dos arquivos js 
const sourcemaps = require('gulp-sourcemaps');//biblioteca para facilitar o debug via navegador
const eslintify = require('eslintify');//biblioteca para verificar a qualidade de escrita do código
const babelify = require('babelify');
const uglify = require('gulp-uglify-es').default;
const jasmine = require('gulp-jasmine');//biblioteca de teste

/*gulp.task('css', function(){
	return gulp.src(files + 'css/app.less') 
		.pipe(less())
		.pipe(minifyCSS())
		.pipe((gulp.dest('./public/css')))
});*/

//tarefa que roda a biblioteca de teste
gulp.task('testes', function(){
	//arquivos que são executados
	return gulp.src('./testes/**/**.js')
		.pipe(jasmine()) //biblioteca de teste
});

//tarefa que roda bibliotecas para o js
gulp.task('js', function(){
	//arquivo que é executado
	return gulp.src('js/app.js')
		/*.pipe($.bro({
	      transform: [
	        [eslintify, {'quiet-ignored': true}], babelify
	      ],
	      error: $.notify.onError('Error: <%= error.message %>'),
	      debug: true
	    }))*/
		.pipe(sourcemaps.init())//biblioteca para facilitar o debug pelo navegador
		.pipe(concat('app.min.js'))//minifica o arquivo executado e cria um novo
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/js'))//local onde é salvo o arquivo final
});

//tarefa que fica monitoriando qualquer mudança nos arquivos js
gulp.task('watch', function(){
	//arquivos monitorados
	gulp.watch('js/**/*.js', ['js']);
	gulp.watch('testes/**/*.js', ['testes'])
	//gulp.watch(files + 'css/**/*.less', ['css']);
});

//tarefas executadas na primeira vez que rodamos o comando gulp
gulp.task('default', ['js', 'testes', 'watch']);