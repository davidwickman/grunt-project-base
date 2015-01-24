'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'watch', {
    js: {
      files: [ 'src/js/**/*.js' ],
      tasks: [ 'clean:js', 'concat:js' ],
      options: {
        spawn: false
      }
    },
    css: {
      files: [ 'src/scss/**/*.scss' ],
      tasks: [ 'clean:css', 'compass:local' ],
      options: {
        spawn: false
      }
    },
    assets: {
      files: [ 'src/**/*' ],
      tasks: [ 'copy' ],
      options: {
        spawn: false
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
