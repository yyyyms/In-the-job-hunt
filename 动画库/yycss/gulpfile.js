let { series, parallel } = require("gulp");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let rename = require("gulp-rename");
let less = require("gulp-less");
let cleanCSS = require("gulp-clean-css");
// let htmlmin = require("gulp-htmlmin");
let gulp = require("gulp");
gulp.task("minifyjs", function (params) {
  return (
    gulp
      .src("src/js/*.js") //源文件
      .pipe(concat("built.js"))
      //合并到临时文件
      .pipe(gulp.dest("dist/js"))
      //生成到目标文件夹
      .pipe(rename({ suffix: ".min" }))
      //重命名
      .pipe(uglify())
      //压缩
      .pipe(gulp.dest("dist/js"))
  );
});
//处理less文件
gulp.task("lessTask", function (params) {
  return gulp.src("src/less/*.less").pipe(less()).pipe(gulp.dest("src/css"));
});
//处理css文件
gulp.task("cssTask", function (params) {
  return gulp
    .src("src/css/*.css")
    .pipe(concat("built.css"))

    .pipe(gulp.dest("dist/css"))

    .pipe(rename({ suffix: ".min" }))

    .pipe(cleanCSS({ compatibility: "ie8" }))

    .pipe(gulp.dest("dist/css"));
});
//压缩html
// gulp.task("htmlMinify", function () {
//   return gulp
//     .src("index.html")
//     .pipe(htmlmin({ collapseWhitespace: true }))

//     .pipe(gulp.dest("dist"));
// });

gulp.task("default", series("minifyjs", "lessTask", "cssTask"));
