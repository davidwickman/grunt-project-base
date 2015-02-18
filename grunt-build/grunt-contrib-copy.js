'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'copy', {
    markup: {
      files: [ {
        expand: true,
        cwd: "<%= config.src %>/",
        src: [ "**/*.*", "!assets/**/*" ],
        dest: "<%= config.dist %>/"
      } ]
    },
    images: {
      files: [ {
        expand: true,
        cwd: "<%= config.assets %>/",
        src: [ "img/**/*" ],
        dest: "<%= config.dist %>/"
      } ]
    },

  } );

  grunt.loadNpmTasks( 'grunt-contrib-copy' );
};
