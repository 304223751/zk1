var gulp = require('gulp');
var webserver = require('gulp-webserver');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var data = [
    {
        img: 'images/maomi.png',
        title: '百度',
        dz: '北京市海淀区西北旺',
        lists: ['互联网', '已上市', '10000人以上'],
        num: '热招:前端工程师等2222个职位'
    },
    {
        img: 'images/maomi.png',
        title: '百度',
        dz: '北京市海淀区西北旺',
        lists: ['互联网', '已上市', '10000人以上'],
        num: '热招:前端工程师等2222个职位'
    },
    {
        img: 'images/maomi.png',
        title: '百度',
        dz: '北京市海淀区西北旺',
        lists: ['互联网', '已上市', '10000人以上'],
        num: '热招:前端工程师等2222个职位'
    },
    {
        img: 'images/maomi.png',
        title: '百度',
        dz: '北京市海淀区西北旺',
        lists: ['互联网', '已上市', '10000人以上'],
        num: '热招:前端工程师等2222个职位'
    }
];
gulp.task('mincss', function () {
    gulp.src('css/*.css')
        .pipe(minify())
        .pipe(gulp.dest('./css'));
});
gulp.task('minjs', function () {
    gulp.src('./js/app.css')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('server', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 8080,
            middlewrae: function (req, res, next) {
                if (req.method === 'GET') {
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    res.end(JSON.stringify(data));
                }

            }
        }));
});
gulp.task('default', ['server', 'mincss', 'minjs']);