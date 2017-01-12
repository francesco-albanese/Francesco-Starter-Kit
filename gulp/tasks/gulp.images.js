import imageMin from 'gulp-imagemin';
import { sources } from '../gulp.sources';
import { onError } from '../gulp.config';

const imageTask = (gulp) => {
  gulp.task(`images`, () =>
    gulp.src(sources.images.src)
    .pipe(imageMin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .on(`error`, onError)
    .pipe(gulp.dest(sources.images.dist))
  );
  return `images`;
};

export { imageTask };
