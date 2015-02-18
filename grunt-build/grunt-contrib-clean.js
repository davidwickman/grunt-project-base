'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'clean', {
    dist: [ "<%= config.dist %>" ],
    js: [ "<%= config.dist %>/js" ],
    css: [ "<%= config.dist %>/css" ],
    images: [ "<%= config.dist %>/img"]
  } );

  grunt.loadNpmTasks( 'grunt-contrib-clean' );
};
