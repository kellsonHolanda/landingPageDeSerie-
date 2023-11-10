const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
}

function styles (){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/css'));
}

function images (){
    return gulp.src('./src/images2/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images2'));

}


exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/main.js', gulp.parallel(scripts));
}