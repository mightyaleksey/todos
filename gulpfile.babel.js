import browserify from 'browserify';
import gulp from 'gulp';
import vinyl from 'vinyl-source-stream';
import { resolve } from 'path';

import Extract from 'postcss-modules-extract-imports';
import Local from 'postcss-modules-local-by-default';
import Scope from 'postcss-modules-scope';
import FixPaths from './postcss-fix-paths'
import Reporter from 'postcss-reporter';
import Url from 'postcss-url';

gulp.task('default', ['js']);

gulp.task('js', () => browserify()
  .add('browser.js')
  .transform('babelify')
  .plugin('css-modulesify', {
    output: 'static/common.css',
    rootDir: __dirname,
    use: [
      Extract,
      Local,
      Scope,

      new FixPaths({
        rootDir: __dirname,
        to: resolve('static/common.css')
      }),
      new Url({
        assetsPath: 'fonts',
        url: 'copy'
      }),
      Reporter
    ]
  })
  .bundle({debug: true})
  .on('error', err => console.error(err.message))
  .pipe(vinyl('browser.js'))
  .pipe(gulp.dest('static')));

gulp.task('watch', () => gulp.watch(['components/*/*.@(css|js)'], ['js']));
