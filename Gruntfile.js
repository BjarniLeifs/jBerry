module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/JBerry.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! Made on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/JBerry.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

     connect:{
      server:{ 
       options: {
        port: 3000,
        keepalive: true,
        livereload: false,
        open: true


        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat'); 
  grunt.loadNpmTasks('grunt-contrib-connect'); 


  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'connect']);
};