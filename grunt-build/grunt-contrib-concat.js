'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'concat', {
    js: {
      files: [ {
        src: "src/js/**/*.js",
        dest: "dist/js/site.js"
      } ]
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-concat' );
};
