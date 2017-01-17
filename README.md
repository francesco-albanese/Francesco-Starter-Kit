# Francesco-Starter-Kit
This is my personal starter kit, which contains the basic file structure and folder scaffolding to quickly start a new project. Took inspiration from http://devtipsstarterkit.com/

## Getting Started

If you want to use it just git clone the repo and enjoy!

Both gulp and grunt config files are assuming a folder structure like the following:

  ```
  | -- app/
  |   | -- jade/
  |   | -- scss/
  |       | -- main.scss
  |   | -- js/
  |       | -- app.js
  |   | -- images/
  ```

### Technologies used

- [pug|jade](https://pugjs.org/api/getting-started.html)
- [sass](http://sass-lang.com/)
- [postcss](https://github.com/postcss/postcss)
- [jshint](https://github.com/jshint/jshint)
- [browserSync](https://www.browsersync.io/)
- [ES2015 and Babel](https://babeljs.io/)
- [Yarn](https://yarnpkg.com/)
- [Grunt](http://gruntjs.com/)
- [Gulp](http://gulpjs.com/)

#### Prerequisites

  - Latest version of [NodeJS](https://nodejs.org/en/) installed on your system and alternatively Gulp or Grunt, depending on your preference
  - [gulpjs](http://gulpjs.com/)
  - [gruntjs](http://gruntjs.com/)

##### Choosing between Gulp and Grunt

package.json and yarn.lock have been included for your convenience so all you have to do to install all your dependencies is
```
npm install
```
if you use npm or
```
yarn install
```

if you use [Yarn](https://yarnpkg.com/) instead.

Delete the following dependencies from package.json if you choose to use [Grunt](http://gruntjs.com/):

```
"gulp": "^3.9.1",
"gulp-autoprefixer": "^3.1.1",
"gulp-babel": "^6.1.2",
"gulp-clean": "^0.3.2",
"gulp-concat": "^2.6.1",
"gulp-cssnano": "^2.1.2",
"gulp-eslint": "^3.0.1",
"gulp-if": "^2.0.2",
"gulp-imagemin": "^3.1.1",
"gulp-jade": "^1.1.0",
"gulp-prompt": "^0.2.0",
"gulp-rename": "^1.2.2",
"gulp-sass": "^3.0.0",
"gulp-sourcemaps": "^1.9.1",
"gulp-uglify": "^2.0.0",
"gulp-util": "^3.0.8",
"gulp-watch": "^4.3.11"
"merge-stream": "^1.0.1",
"rollup-stream": "^1.18.0",
"vinyl-buffer": "^1.0.0",
"vinyl-source-stream": "^1.1.0"

```

Delete the following from package.json if [Gulp](http://gulpjs.com/) is your preferred choice:

```
"grunt": "^1.0.1",
"grunt-babel": "^6.0.0",
"grunt-browser-sync": "^2.2.0",
"grunt-contrib-clean": "^1.0.0",
"grunt-contrib-concat": "^1.0.1",
"grunt-contrib-copy": "^1.0.0",
"grunt-contrib-imagemin": "^1.0.1",
"grunt-contrib-jade": "^1.0.0",
"grunt-contrib-jshint": "^1.1.0",
"grunt-contrib-uglify": "^2.0.0",
"grunt-contrib-watch": "^1.0.0",
"grunt-postcss": "^0.8.0",
"grunt-sass": "^2.0.0",
"load-grunt-tasks": "^3.5.2",
```

I took advantage of [ES2015 and Babel](https://babeljs.io/) to completely modularise Gulp tasks. Each task lives in a separate JavaScript file which makes it super easy to debug and maintain.

###### Author

* **Francesco Albanese** - *Version 1.0* - [Francesco-Starter-Kit](http://francesco-albanese.github.io/Francesco-Starter-Kit/dist/)

## Acknowledgments

* [DevTips](https://github.com/DevTips)
