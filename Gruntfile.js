module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      basic: {
        src: ['src/**/*.js'],
        dest: 'out/JBerry.js',
      },
      extras: {
        src: ['css/*.css'],
        dest: 'out/style.css',
      },
    },
    uglify: {
      options: {
        banner: '/*! Made on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      basic: {
        files: {
          'out/JBerry.min.js': ['<%= concat.basic.dest %>']
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
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['concat:basic'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*.css', 'css/less/*.less'],
        tasks: ['concat:extras'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat'); 
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'connect', 'watch']);
};