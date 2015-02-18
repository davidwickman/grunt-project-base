module.exports = function( grunt ) {

  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' ),
    config: {
      src: 'src',
      dist: 'dist',
      assets: '<%= config.src %>/assets'
    }
  } );

  grunt.loadTasks( 'grunt-build' );

  grunt.registerTask( "production", "Production sequence", [ "clean", "compass:production", "concat", "copy" ] ),
  grunt.registerTask( "local", "Spin up a browser, watch for changes, and BrowserSync those changes.", [ "clean", "compass:local", "concat", "copy", "browserSync", "watch" ] );

  grunt.registerTask( 'default', [ 'local' ] );

}
