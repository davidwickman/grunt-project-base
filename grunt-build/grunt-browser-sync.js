'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'browserSync', {
    local: {
      bsFiles: {
        src: '<%= config.dist %>/**'
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "<%= config.dist %>"
        }
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-browser-sync' );
};
