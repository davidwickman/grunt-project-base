'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'browserSync', {
    local: {
      bsFiles: {
        src: 'dist/**'
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "dist"
        }
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-browser-sync' );
};
