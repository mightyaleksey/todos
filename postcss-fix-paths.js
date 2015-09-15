'use strict';

var fs = require('fs');
var path = require('path');
var postcss = require('postcss');

function lookup(from, rootDir) {
  var pathname = path.join(rootDir, from);
  if (fs.existsSync(pathname)) {
    return pathname;
  }

  var dirname = path.dirname(from);
  while (dirname !== '/') {
    pathname = path.relative(dirname, from);
    try {
      return require.resolve(pathname);
    } catch(e) {}

    dirname = path.dirname(dirname);
  }

  return null;
}

module.exports = postcss.plugin('postcss-fix-paths', function (opts) {
  var rootDir = opts && opts.rootDir || process.cwd();
  var to = opts && opts.to;

  return function (css, result) {
    var from = path.normalize(result.opts.from);
    var pathname = lookup(from, rootDir);

    if (!pathname) {
      return;
    }

    result.opts.from = pathname;
    to && (result.opts.to = to);

    css.eachDecl(function (decl) {
      if (decl.value && decl.value.indexOf('url(') > -1 && decl.source && decl.source.input) {
        decl.source.input.file = pathname;
        decl.source.input.from = pathname;
      }
    });
  };
});
