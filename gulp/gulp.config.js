//Here you have to import all your tasks and define the configuration needed

import gutil from 'gulp-util';
import { jadeTask } from "./tasks/gulp.jade";
import { sassTask } from "./tasks/gulp.sass";
import { jsTask } from "./tasks/gulp.javascript";
import { imageTask } from "./tasks/gulp.images";
import { browserSyncTask } from "./tasks/gulp.browsersync";
import { watchTask } from "./tasks/gulp.watch";

//create tasks object to use it in the main gulpfile
const tasks = {
  jade(gulp, bs) {
    return jadeTask(gulp, bs);
  },
  sass(gulp, bs) {
    return sassTask(gulp, bs);
  },
  javascript(gulp, bs) {
    return jsTask(gulp, bs);
  },
  images(gulp) {
    return imageTask(gulp);
  }
};

//create dev tasks object to use it in the main gulpfile
const devTasks = {
  bsSync(gulp) {
    return browserSyncTask(gulp);
  },
  watch(gulp) {
    return watchTask(gulp);
  }
};

//export onError function so when a plugin errors you get a notification in the terminal
const onError = function(err) {
  gutil.log(gutil.colors.red('ERROR', err.plugin), err.message);
  gutil.beep();
  new gutil.PluginError(err.plugin, err, {showStack: true})
  this.emit('end');
};

export { tasks, onError, devTasks };
