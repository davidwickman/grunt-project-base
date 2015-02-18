'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'watch', {
    js: {
      files: [ '<%= config.assets %>/js/**/*.js' ],
      tasks: [ 'clean:js', 'concat:js' ],
      options: {
        spawn: false
      }
    },
    css: {
      files: [ '<%= config.assets %>/scss/**/*.scss' ],
      tasks: [ 'clean:css', 'compass:local' ],
      options: {
        spawn: false
      }
    },
    assets: {
      files: [ '<%= config.src %>/**/*.*' ],
      tasks: [ 'copy:markup' ],
      options: {
        spawn: false
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
