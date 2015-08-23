import browserify from 'browserify';
import gulp from 'gulp';
import vinyl from 'vinyl-source-stream';

gulp.task('js', () => browserify()
  .add('browser.js')
  .transform('babelify')
  .plugin('css-modulesify', {
    d: __dirname,
    o: 'static/common.css'
  })
  .bundle({debug: true})
  .on('error', err => console.error(err.message))
  .pipe(vinyl('browser.js'))
  .pipe(gulp.dest('static')));

gulp.task('watch', () => gulp.watch(['components/*/*.@(css|js)'], ['js']));
