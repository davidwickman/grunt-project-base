'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'watch', {
    js: {
      files: [ '<%= config.assets %>/js/**/*' ],
      tasks: [ 'clean:js', 'concat:js' ],
      options: {
        spawn: false
      }
    },
    css: {
      files: [ '<%= config.assets %>/scss/**/*' ],
      tasks: [ 'clean:css', 'compass:local' ],
      options: {
        spawn: false
      }
    },
    images: {
      files: [ '<%= config.assets %>/img/**/*' ],
      tasks: [ 'clean:images', 'copy:images' ],
      options: {
        spawn: false
      }
    },
    assets: {
      files: [ '<%= config.src %>/**/*' ],
      tasks: [ 'copy' ],
      options: {
        spawn: false
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
