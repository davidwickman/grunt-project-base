'use strict';

module.exports = function( grunt ) {
  grunt.config.set( 'compass', {
    local: {
      options: {
        httpPath: "/",
        cssDir: "dist/css",
        sassDir: "src/scss",
        imagesDir: "src/img",
        javascriptsDir: "src/js"
      }
    },
    production: {
      options: {
        httpPath: "/",
        cssDir: "dist/css",
        sassDir: "src/scss",
        imagesDir: "src/img",
        javascriptsDir: "src/js",
        outputStyle: 'compressed'
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-compass' );
};
