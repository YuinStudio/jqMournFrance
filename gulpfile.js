var gulp = require('gulp');

var gutil  = require('gulp-util');
var compass = require('gulp-compass');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var html2js = require('gulp-html-js-template');
var htmlmin = require('gulp-htmlmin');
var cssToJs = require('gulp-css-to-js');
var addsrc = require('gulp-add-src');

var paths = {
    js: {
        src: 'src/js/*.js',
        path: 'src/js/'
    },
    css: {
        path: 'src/scss/',
        src: 'src/scss/*.scss',
        main: 'dist/css/jqmournfrance.min.css'
    },
    html: {
        src: 'src/template/*.html'
    }
};

var dist = {
    js: 'dist/js/',
    css: 'dist/css/'
};

var temp = {
    path: 'temp/',
    js: 'temp/*.js'
};

gulp.task('biuld:css', function () {
    gulp.src(paths.css.src)
        .pipe(compass({
            css: dist.css,
            sass: paths.css.path
        }))
        .on('error', function(error) {
            console.log(error);
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(dist.css))
        .pipe(cssmin(dist.css))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(dist.css));
});

gulp.task('build:template', function() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(html2js())
        .pipe(concat('template-france.js'))
        .pipe(gulp.dest(temp.path));
});

gulp.task('convert:css2js', ['biuld:css'], function () {
    return gulp.src(paths.css.main)
        .pipe(cssToJs())
        .pipe(concat('style-france.js'))
        .pipe(gulp.dest(temp.path));
});

gulp.task('biuld:js', ['build:template', 'convert:css2js'], function() {
    gulp.src(paths.js.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(addsrc(temp.js))
        .pipe(concat('jqmournfrance.js'))
        .pipe(gulp.dest(dist.js))
        .pipe(uglify())
        .pipe(rename('jqmournfrance.min.js'))
        .pipe(gulp.dest(dist.js));
});



// Watch Files For Changes
gulp.task('watch', function() {
    gulp.start('biuld:js');
    gulp.watch(paths.css.src, ['biuld:js']);
    gulp.watch(paths.js.src, ['biuld:js']);
    gulp.watch(paths.html.src, ['biuld:js']);
});

gulp.task('default', function() {
    gulp.start('biuld:css', 'biuld:js', 'build:template');
});