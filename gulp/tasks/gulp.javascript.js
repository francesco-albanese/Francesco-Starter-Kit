//javascript task, compile ES2015 and uglify

import eslint from 'gulp-eslint';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import clean from 'gulp-clean';
import { sources } from '../gulp.sources';

const jsTask = (gulp, bs) => {
  const del = () => gulp.src(sources.javascript.dist + `/*.map`, {read: false})
  .pipe(clean());

  gulp.task(`javascript`, () => {
    return rollup({entry: sources.javascript.src, sourceMap: true, debug: true})
    .on('error', function(e) {
      console.error(`${e.stack}`);
      this.emit('end');
    })
    .pipe(source(`app.js`))
    .pipe(buffer())
    .pipe(gulpif(process.env.NODE_ENV === `dev`, sourcemaps.init({loadMaps: true})))
    .pipe(babel())
    .pipe(gulpif(process.env.NODE_ENV === `dev`, sourcemaps.write('.')))
    .pipe(gulpif(process.env.NODE_ENV === `production`, uglify()))
    .pipe(gulp.dest(sources.javascript.dist))
    //if production delete sourcemap
    .pipe(gulpif(process.env.NODE_ENV === `production`, merge(del())))
    .pipe(bs.reload({stream:true}));
  });
  return `javascript`;
};

export { jsTask };
