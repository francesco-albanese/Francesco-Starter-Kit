import { sources } from '../gulp.sources';
import bs from 'browser-sync';
const tasksToExecute = [`jade`, `sass`, `javascript`];

const browserSyncTask = (gulp) => {
  gulp.task(`browser-sync`, tasksToExecute, () => {
    bs.init({
        server: {
            baseDir: sources.jade.dist.replace(`/`, ``)
        },
        keepalive: true,
        notify:false,
        reloadOnRestart: true,
        tunnel: false,
        // tunnel: 'test'
    });
  });
  return `browser-sync`;
};

export { browserSyncTask };
