module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/script.main.js'
      }
    },
    uglify:{
      dist:{
        src: ['dist/script.main.js'],
        dest: 'dist/script.main.min.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};