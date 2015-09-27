/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    wait: {
      options: {
        delay: 1500
      }
    },
    waitServer: {
      server: {
        options: {
          req: 'http://localhost:3004',
          fail: function () {
            console.error('the server had not start'); 
          },
          timeout: 20 * 1000,
          isforce: true,
          interval: 200,
          print: true
        }
      }
    },
    watch: {
      reload: {
        files: ['root/**/*', 'lib/**/*'],
        tasks: ['wait:', 'waitServer:'],
        options: {
          livereload: true,
        },
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');        // 監視
  grunt.loadNpmTasks('grunt-notify');               // GrowlNotify
  grunt.loadNpmTasks('grunt-wait');          // server起動確認
  grunt.loadNpmTasks('grunt-wait-server');          // server起動確認

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('manual', ['wait', 'waitServer']);

  // GrowlNotify
  grunt.task.run('notify_hooks');

};
