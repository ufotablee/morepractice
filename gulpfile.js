const gulp = require('gulp');
const concat = require('gulp-concat');
const autoPrefix = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');

const cssFiles = [
    './src/css/style.css',
    './src/css/media.css'
]
const jsFiles = [
    './src/js/main.js',
    './src/js/main2.js'
]

function styles(){
    return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(autoPrefix({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCss({
        level: 2
    }))
    .pipe(gulp.dest('./build/css'))
}
function scripts(){
    return gulp.src(jsFiles)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
}
function clean(){
    return del(['build/*'])
}
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('build', gulp.series(clean,gulp.parallel(styles,scripts)))