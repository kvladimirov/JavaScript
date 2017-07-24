var gulp = require('gulp')
var uglify = require('gulp-uglify')
var del = require('del')
var htmlmin = require('gulp-htmlmin')

gulp.task('scripts', function () {
  del.sync('build/**')

  return gulp.src([
    'content/jquery/dist/jquery.js'
  ])
  .pipe(uglify())
  .pipe(gulp.dest('build'))
})

gulp.task('html', function () {
  return gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
})

gulp.task('default', ['scripts', 'html'], function () { })
