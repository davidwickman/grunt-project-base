module.exports = function( grunt ) {

  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' )
  } );

  grunt.loadTasks( 'grunt-build' );

  grunt.registerTask( "production", "Production sequence", [ "clean", "copy", "compass:production", "concat" ] ),
  grunt.registerTask( "local", "Spin up a browser, watch for changes, and BrowserSync those changes.", [ "clean", "copy", "compass:local", "concat", "browserSync", "watch" ] );

  grunt.registerTask( 'default', [ 'local' ] );

}
