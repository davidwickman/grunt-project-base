'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'copy', {
    markup: {
      files: [ {
        expand: true,
        cwd: "src/",
        src: [ "**/*.*" ],
        dest: "dist/"
      } ]
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-copy' );
};
