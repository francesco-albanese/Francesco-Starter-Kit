'use strict';

import gulp from 'gulp';
import bs from 'browser-sync';
import { tasks } from './gulp/gulp.config';
import { devTasks } from './gulp/gulp.config';
import lodash from 'lodash';
import prompt from 'gulp-prompt';

//creating lists of tasks to be executed
const developmentTasks = [];
const productionTasks = [];

lodash.forEach(devTasks, (task, i) => {
  developmentTasks.push(task(gulp));
});

lodash.forEach(tasks, (task, i) => {
  productionTasks.push(task(gulp, bs));
});

//default task
gulp.task('default', () => {
  return gulp.src('*').pipe(
    prompt.prompt({
        type: 'checkbox',
        name: 'tasks',
        message: 'Choose your destination environment',
        choices: ['Development', 'Production']
    }, (res) => {
        lodash.forEach(res.tasks, (result) => {
          if (result === 'Development') {
            process.env.NODE_ENV = 'dev';
            //run browserSync and watch only
            gulp.start(`dev:build`);
          } else if (result === 'Production') {
            process.env.NODE_ENV = 'production';
            //run all tasks except for browserSync and watch, minify everything
            gulp.start(`build:app`);
          }
        });
    }));
});

//dev task
gulp.task(`dev:build`, developmentTasks);
//build all
gulp.task(`build:app`, productionTasks);
