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
        server: {
          src: ['server.js', 'server/**/*.js', 'serverInitial.js'],
          dest: './serverCon.js',
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
      jshint: {
        files: ['server.js', 'Gruntfile.js', 'src/**/*.js', 'server/**/*.js'],
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
      },
      express: {
        server: {
          options: {
            script: './serverCon.js'
          }
        }
      }
    });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'express:server', 'watch']);
};