//Sass task

import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpif from 'gulp-if';
import minifyCss from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import merge from 'merge-stream';
import clean from 'gulp-clean';
import { sources } from '../gulp.sources';
import { onError } from '../gulp.config';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
};

const sassTask = (gulp, bs) => {
  const del = () => gulp.src(sources.sass.dist + `/*.map`, {read: false})
  .pipe(clean());
  gulp.task('sass', () =>
    gulp.src(sources.sass.src)
    .pipe(gulpif(process.env.NODE_ENV === 'dev', sourcemaps.init()))
    .pipe(sass(sassOptions))
    .on('error', onError)
    .pipe(autoprefixer(['last 5 versions'], { cascade: true }))
    .pipe(gulpif(process.env.NODE_ENV === 'dev', sourcemaps.write('.')))
    .pipe(gulpif(process.env.NODE_ENV === 'production', minifyCss()))
    .pipe(gulp.dest(sources.sass.dist))
    .pipe(gulpif(process.env.NODE_ENV === `production`, merge(del())))
    .pipe(bs.reload({stream:true}))
  );
  //return the name of the task itself from the function because gulp default task expects an Array of Strings
  return 'sass';
};

export { sassTask };
