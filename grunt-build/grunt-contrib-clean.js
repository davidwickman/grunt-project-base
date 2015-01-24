'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'clean', {
    dist: [ "dist" ],
    js: [ "dist/js" ],
    css: [ "dist/css" ],
  } );

  grunt.loadNpmTasks( 'grunt-contrib-clean' );
};
