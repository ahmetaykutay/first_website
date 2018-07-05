const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  minify = require("gulp-babel-minify");

gulp.task('scripts', function (callback) {
  gulp.src('assets/js/index.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('assets/js'))
  callback()
});

gulp.task('sass', function () {
  return gulp.src('./css/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function (callback) {
  browserSync.init({
    notify: false,
    proxy: 'http://localhost/flower-shop/cicekci_php/',
    ghostMode: false
  });

  gulp.watch('./**/*.php', function () {
    browserSync.reload();
  });

  gulp.watch('assets/js/**/*.js', ['waitForScripts']);
  gulp.watch('assets/css/**/*.scss', ['waitForStyles']);
});

gulp.task('waitForStyles', ['sass'], function () {
  browserSync.reload();
});

gulp.task('waitForScripts', ['scripts'], function () {
  browserSync.reload();
});