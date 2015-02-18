'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'concat', {
    js: {
      files: [ {
        src: "<%= config.assets %>/js/**/*.js",
        dest: "<%= config.dist %>/js/site.js"
      } ]
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-concat' );
};
