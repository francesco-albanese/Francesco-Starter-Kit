// include gulp and plugins
var gulp             = require('gulp'),
    gutil            = require('gulp-util'),
    watch            = require('gulp-watch'),
    jade             = require('gulp-jade'),
    sass             = require('gulp-sass'),
    uglify           = require('gulp-uglify'),
    imageMin         = require('gulp-imagemin'),
    autoprefixer     = require('gulp-autoprefixer'),
    minifyCss        = require('gulp-cssnano'),
    browserSync      = require('browser-sync').create(),
    rename           = require('gulp-rename'),
    jshint           = require('gulp-jshint'),
    sourcemaps       = require('gulp-sourcemaps'),
    onError = function(err) {
      gutil.log(gutil.colors.red('ERROR', err.plugin), err.message);
      gutil.beep();
      new gutil.PluginError(err.plugin, err, {showStack: true})
      this.emit('end');
    };

var sources = {
  "jade": "app/jade/*.jade",
  "sass": "app/scss/main.scss",
  "minifyCss": "app/css/main.css",
  "compress": [
    'app/js/*.js',
    '!app/js/modernizr.min.js',
    '!app/js/touchGallery.js'
  ],
  "images": "app/images/**/*.+(png|jpg|jpeg|gif|svg)"
};

// Define all the tasks

// jade

gulp.task('jade', function() {
  return gulp.src(sources.jade)
    .pipe(jade())
    .on('error', onError)
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('dist'))
});

// Sass

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
};

gulp.task('sass', function () {
  return gulp.src(sources.sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .on('error', onError)
    .pipe(autoprefixer(['last 10 versions'], { cascade: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css/')) // compile CSS not minified, for testing purposes
    .pipe(browserSync.reload({stream:true}))
});

// Minify CSS

gulp.task('minifyCss', function() {
  return gulp.src(sources.minifyCss)
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/css/'))
    .pipe(gulp.dest('dist/css/'))
});

// Js minification

gulp.task('compress', function() {
  return gulp.src(sources.compress)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .on('error', onError)
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({stream:true}))
});

// Images compression

gulp.task('images', function() {
  return gulp.src(sources.images)
  .pipe(imageMin({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  }))
  .on('error', onError)
  .pipe(gulp.dest('dist/images'))
});

// Browser Sync

gulp.task('browser-sync', ['jade', 'sass', 'compress'],  function() {
  browserSync.init({
      server: {
          baseDir: "app"
      },
      keepalive: true,
      notify:false,
      reloadOnRestart: true,
      tunnel: false,
      // tunnel: 'test'
  });
});

// Watch for changes, recompile jade & Sass and reload browserSync

gulp.task('watch', function() {
  gulp.watch('app/jade/**/*.jade', ['jade']);
  gulp.watch('app/scss/**/*.scss', ['sass', 'minifyCss']);
  gulp.watch('app/js/*.js', ['compress']);
  gulp.watch('app/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
});


// default gulp task
gulp.task('default', ['browser-sync', 'watch', ]);
