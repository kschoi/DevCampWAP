var gulp = require('gulp');
var minify = require('gulp-minify'); // 변수명 바꾸는 것도 시연해주면 좋겠다

gulp.task('default', function(){
    return gulp.src('dev/js/jquery.js') //*.js로 변경하면 .js 확장자를 가진 모든 파일
        .pipe(minify()) // pipe의 역할은 로직을 계속 연결
        .pipe(gulp.dest('public'));
});

