var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var notify = require('gulp-notify');
var nodemon = require('gulp-nodemon');


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title : 'Compile Error',
    message : '<%= error.message %>'
  }).apply(this, args);
  //console.log('Compile error: ', args);
  this.emit('end'); //keeps gulp from hanging on this task
}
function buildScript(file, watch) {
  var props = {
    entries : ['./build/client/' + file],
    debug : true,
    transform : [reactify]
  };
  //watchify if watch set to true. otherwise browserify once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  function rebundle(){
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build/client/'));
  }
  bundler.on('update', function() {
    var updateStart = Date.now();
    rebundle();
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })
  // run it once the first time buildScript is called
  return rebundle();
}
// run once
gulp.task('scripts', function() {
  return buildScript('./../src/app.jsx', true);
});
// run 'scripts' task first, then watch for future changes
gulp.task('default', ['scripts'], function() {
  return buildScript('./../src/app.jsx', true);
});

gulp.task('default', ['scripts'], function() {
  return buildScript('./../src/app.jsx', true);
});
