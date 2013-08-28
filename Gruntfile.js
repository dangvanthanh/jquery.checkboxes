module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*\n* Checkboxes jQuery Plugin\n* Version: <%= pkg.version %>\n* Source: <%= pkg.repository.url %>\n* Copyright (c) 2013 <%= pkg.author %>\n *Licensed under <%= pkg.license %> \n*/\n'
      },
      build: {
        src: 'checkboxes.js',
        dest: 'checkboxes.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};