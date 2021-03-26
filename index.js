const fs = require('fs');
const path = require('path');
const map = require('map-limit');
const readdirp = require('readdirp');
const rimraf = require('rimraf');

function remove(root, done) {
  const dirs = [];

  readdirp(root, {
    type: 'directories'
  }).on('data', function(dir) {
    if (path.basename(dir.fullPath) === 'node_modules') {
      dirs.push(dir.fullPath);
    }
  }).once('end', function() {
    map(dirs, 1, function(dirname, next) {
      if (fs.existsSync(dirname)) {
        rimraf(dirname, next);
      } else {
        next();
      }
    }, function(err) {
      done(err);
    });
  });
}

module.exports = remove;
