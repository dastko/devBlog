var gulp = require('gulp');
var webserver = require('gulp-webserver');
var main = require('main-bower-files');
var inject = require('gulp-inject');
var del = require('del');

var paths = {
    temp: 'temp',
    vendor: 'temp/vendor',
    tempIndex: 'temp/index.html',

    index: 'app/index.html',
    app: ['app/**/*', '!app/index.html'],
    bower: 'bower_components/**/*'
};

gulp.task('default', ['watch']);


gulp.task('watch', ['load'], function () {
    gulp.watch(paths.app, ['script']);
    gulp.watch(paths.bower, ['vendors']);
    gulp.watch(paths.index, ['copy']);
});

gulp.task('load', ['copy'], function () {
    return gulp.src(paths.temp)
        .pipe(webserver({
            livereload: true,
            proxies: [{
                source: '/api',
                target: 'http://localhost:1337'
            }]
        }));
});

gulp.task('copy', function () {
    var tempVendor = gulp.src(main())
        .pipe(gulp.dest(paths.vendor));

    var files = gulp.src(paths.app).pipe(gulp.dest(paths.temp));

    return gulp.src(paths.index)
        .pipe(gulp.dest(paths.temp))
        .pipe(inject(tempVendor, {
            relative: true,
            name: 'vendorInject'
        }))
        .pipe(inject(files, {
            relative: true
        }))
        .pipe(gulp.dest(paths.temp));

});

gulp.task('vendors', function () {
    var tempVendor = gulp.src(main()).pipe(gulp.dest(paths.vendor));

    return gulp.src(paths.tempIndex)
        .pipe(inject(tempVendor, {
            relative: true,
            name: 'vendorInject'
        }))
        .pipe(gulp.dest(paths.temp));
});


gulp.task('script', function () {

    var files = gulp.src(paths.app)
        .pipe(gulp.dest(paths.temp));

    return gulp.src(paths.tempIndex)
        .pipe(inject(files, {
            relative: true
        }))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('clean', function () {
    del([paths.temp]);
});