//Jade task

import jade from 'gulp-jade';
import { sources } from '../gulp.sources';
import { onError } from '../gulp.config';

const jadeTask = (gulp, bs) => {
  gulp.task('jade', () =>
    gulp.src(sources.jade.src)
    .pipe(jade())
    .on('error', onError)
    .pipe(gulp.dest(sources.jade.dist))
    .pipe(bs.reload({stream:true}))
  );
  //return the name of the task itself from the function because gulp default task expects an Array of Strings
  return `jade`;
};

export { jadeTask };
