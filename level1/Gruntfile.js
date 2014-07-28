'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        asciiDocAll: {
            options: {
                python: '"C:\\java-sw\\Python27\\python.exe"',              /* path to python executable */
                asciiDoc: '""C:\\java-sw\\asciidoc-8.6.9\\asciidoc.py""',   /* path to asciiDoc script   */
                files: 'README.asciiDoc'  /* globbing pattern for asciiDoc files */
            }
        },
        clean: {
            htmlAsciiDocs: '*.html'    
        },
        jshint: {
            gruntjs: ['Gruntfile.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            asciiDoc: {
                tasks: ['asciiDocAll'],
                files: ['*.{md,html}'],
                options: {
                    livereload: true
                }                
            },
            lint: {
                tasks: ['jshint:gruntjs'],
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['*.html']
            }
        }
    });    

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* Custom Tasks */
    grunt.registerTask('asciiDocAll', 'Process all AsciiDoc files in current directory using shell', function () {
        var path = require('path');
        var async = require('async');
        var chalk = require('chalk');

        var options = this.options({
            python: 'python.exe',
            asciiDoc: 'asciidoc.py',
            files: '*.asciidoc'
        });

        var done = this.async();

        var asciiDocSrcPath = path.join(__dirname, options.files);
        var asciidocSrcFiles = grunt.file.expand(asciiDocSrcPath);
        var shellCommands = [];
        async.eachSeries(asciidocSrcFiles, function (asciiDocSrcFile, next) {
            grunt.log.write('Adding: ' + path.basename(asciiDocSrcFile) + ': ');
            options.asciiDocSrcFile = asciiDocSrcFile;
            shellCommands.push(options.python + ' ' + options.asciiDoc + ' ' + '-b html5 -a icons -a toc2 ' + '-a themedir="' + __dirname + '\\themes" ' + '-a theme=asw "' +  asciiDocSrcFile + '"');
            grunt.log.writeln(chalk.green('OK'));
            next();
        });
        grunt.config.set('shell.runAsciiDoc.command', shellCommands.join(' && '));
        grunt.task.run('shell');
        done();
    });
};


