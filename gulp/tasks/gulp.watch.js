import { sources } from '../gulp.sources';
import watch from 'gulp-watch';

const watchTask = (gulp) => {
  gulp.task(`watch`, () => {
    gulp.watch(sources.jade.watch, ['jade']);
    gulp.watch(sources.sass.watch, ['sass']);
    gulp.watch(sources.javascript.watch, ['javascript']);
    gulp.watch(sources.images.src, ['images']);
  });
  return `watch`;
};

export { watchTask };
