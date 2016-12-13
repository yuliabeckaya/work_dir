'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
  var spriteData = $.gulp.src('images/*.png').pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe($.gulp.dest('/assets/img'));
});
};
