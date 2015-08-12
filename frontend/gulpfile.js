var gulp = require('gulp');
var webserver = require('gulp-webserver');
var main = require('main-bower-files');
var inject = require('gulp-inject');

var paths = {
    temp: 'temp',
    vendor: 'temp/vendor',
    index: 'app/index.html'
};

gulp.task('default', ['script',
    'load']);

gulp.task('script', function () {

    var tempIndex = gulp.src(paths.index)
        .pipe(gulp.dest(paths.temp));

    var scripts = gulp.src('app/**/*.js').pipe(gulp.dest(paths.temp));

    var tempVendor = gulp.src(main())
        .pipe(gulp.dest(paths.vendor));

    tempIndex.pipe(inject(scripts, {
            relative: true
        }))
        .pipe(inject(tempVendor, {
            relative: true,
            name: 'vendorInject'
        }))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('load', function () {
    gulp.src(paths.temp)
        .pipe(webserver({
            //open: true
        }));
});