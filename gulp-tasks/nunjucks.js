// packages
const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks-render");

// CSS task
function templateBuild() {
    return gulp
        .src("./src/pages/*.njk")
        .pipe(nunjucks({
            path: ["./src/pages/"],
            ext: ".html"
        }))
        .pipe(gulp.dest("./dist/"));
}

// exports
module.exports = {
    build: templateBuild
};
