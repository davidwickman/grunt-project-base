'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'compass', {
    local: {
      options: {
        httpPath: "/",
        cssDir: "<%= config.dist %>/css",
        sassDir: "<%= config.assets %>/scss",
        imagesDir: "<%= config.assets %>/img",
        javascriptsDir: "<%= config.assets %>/js"
      }
    },
    production: {
      options: {
        httpPath: "/",
        cssDir: "<%= config.dist %>/css",
        sassDir: "<%= config.assets %>/scss",
        imagesDir: "<%= config.assets %>/img",
        javascriptsDir: "<%= config.assets %>/js",
        outputStyle: 'compressed'
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-compass' );
};
