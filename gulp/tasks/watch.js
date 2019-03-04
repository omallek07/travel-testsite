const gulp = require('gulp');

const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
   browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

// second argument are dependencies
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
