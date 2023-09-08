相关插件:

gulp-concat : 合并文件(js/css)
gulp-uglify : 压缩 js 文件
gulp-rename : 文件重命名
gulp-less : 编译 less
gulp-clean-css : 压缩 css
gulp-livereload : 实时自动编译刷新

重要 API

gulp.src(filePath/pathArr) :

指向指定路径的所有文件, 返回文件流对象
用于读取文件

gulp.dest(dirPath/pathArr)

指向指定的所有文件夹
用于向文件夹中输出文件

gulp.task(name, [deps], fn)

定义一个任务

gulp.watch()

监视文件的变化
