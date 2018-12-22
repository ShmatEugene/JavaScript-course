var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCss = require('gulp-clean-css');


gulp.task('default', function () {
  return gulp.src('styles/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/'));
});
