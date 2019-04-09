// packages
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");

// CSS task
function stylesBuild() {
  return gulp
    .src("./src/assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", notify.onError(err => ({
        title: "Style error(s)",
        message: err.message
    }))))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write(".", {
        mapFile: function(mapFilePath) {
            // source map files are named *.map instead of *.js.map
            return mapFilePath.replace(".min.css.map", ".map");
        }
    }))
    .pipe(gulp.dest("./dist/css/"));
}

// exports
module.exports = {
  build: stylesBuild
};
