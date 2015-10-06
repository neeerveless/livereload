/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell: {
        sleep: {
            command: 'sleep 2s'              // サーバが再起動するまで待つ
        }
    },
    waitServer: {
      server: {
        options: {
          req: 'your sever URL',             // 監視するサーバのURL
          fail: function () {
            console.error('the server had not start');
          },
          timeout: 50 * 1000,                // ここは微調整必要かも
          isforce: true,
          interval: 200,
          print: true
        }
      }
    },
    watch: {
      reload: {
        files: ['root/**/*', 'lib/**/*'],    // 監視対象ファイル
        tasks: ['shell:sleep', 'waitServer:'],
        options: {
          livereload: true,
        },
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');  // 監視
  grunt.loadNpmTasks('grunt-notify');         // GrowlNotify
  grunt.loadNpmTasks('grunt-shell');          // severの再起動が始まるのを待つ
  grunt.loadNpmTasks('grunt-wait-server');    // server起動確認

  // Default task.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('manual', ['shell', 'waitServer']);

  // GrowlNotify
  grunt.task.run('notify_hooks');

};
