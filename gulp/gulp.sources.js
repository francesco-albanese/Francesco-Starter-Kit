//Here you define all the sources and destinations
const sources = {
  "jade": {
    "src": "app/jade/*.jade",
    "watch": "app/jade/**/*.jade",
    "dist": "dist/"
  },
  "sass": {
    "src": "app/scss/main.scss",
    "watch": "app/scss/**/*.scss",
    "dist": "dist/css"
  },
  "javascript": {
    "src": "app/js/app.js",
    "watch": "app/js/**/*.js",
    "dist": "dist/js"
  },
  "images": {
    "src": "app/images/**/*.+(png|jpg|jpeg|gif|svg)",
    "dist": "dist/images"
  }
};

export { sources };
