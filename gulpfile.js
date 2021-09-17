const gulp = require('gulp');
const rename = require('gulp-rename');
const browserify = require('browserify');
const babelify = require('babelify');
const through2 = require('through2');
const tsify = require('tsify');
const esmify = require('esmify');
 

gulp.task('default', function (done) {
  // browserifyしたいファイルを読み込む
  gulp.src('./src/Hiradumi.tsx')
  // pipeしてthrough2オブジェクトを生成する
  .pipe(through2.obj(function(file, encode, callback){
      // fileにはsrcで読み込んだファイルの情報が引き渡される
      // file.pathを利用してbrowserifyインスタンスを生成する
      browserify(file.path, {})
      .plugin(tsify, { target: 'es5' })
      .transform(babelify, { extensions: [ '.tsx', '.ts' ] })
      .bundle(function(err, res){
          // bundleを実行し，処理結果でcontentsを上書きする
          file.contents = res;
          // callbackを実行し，次の処理にfileを引き渡す
          // nullになっている部分はエラー情報
          callback(null, file);
      });
  }))
  .pipe(rename('Hiradumi.js'))
  .pipe(gulp.dest('./lib'))
  done();
})
