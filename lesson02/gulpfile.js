var
    gulp  = require("gulp"),
    livereload = require("gulp-livereload");

gulp.task("reload-css", function() {
    gulp.src('./styles/*.css')
        .pipe(livereload());
});

gulp.task("default", function() {
    livereload.listen();
    gulp.watch('./styles/*.css', ['reload-css']);
});