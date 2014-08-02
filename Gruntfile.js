module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['public/*.html','public/js/output.min.js'],

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'public/js/output.min.js': ['public/js/jquery-1.11.0.js','public/js/bootstrap.min.js']
        }
      }
    },

    jade: {
      compile: {
        options: {
            client: false,
            pretty: true
        },
        files: [ {
          cwd: "src",
          src: "**/*.jade",
          dest: ".",
          expand: true,
          ext: ".html"
        } ]
      }
    },

    stylus: {
      compile: {
        options: {
          linenos: true,
          compress: false
        },
        files: {
          'public/css/styl.css': ['src/*.styl']
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'public/css/styl.min.css': [ 'public/css/*.css' ]
        }
      }
    },

    watch: {
      options: {
        livereload: true,
        event: ['added', 'changed']
      },
      clean: ['static'],
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
      },
      stylus: {
        files: ['src/**/*.styl'],
        tasks: ['stylus']
      },
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');

  // Compile Jade templates to JavaScript !!!IMPORTANT there is another contrib from jade to JS
  grunt.loadNpmTasks('grunt-contrib-jade');
  // Compile Stylus style sheets to CSS
  grunt.loadNpmTasks('grunt-contrib-stylus');
  // Compress & minify CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Remove files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // executing connect server commands
  grunt.loadNpmTasks('grunt-contrib-connect');

  //default task
  grunt.registerTask('default', ['clean', 'uglify', 'jade', 'stylus', 'cssmin']);

};
