/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        backbone: '../node_modules/backbone/backbone',
        marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
        backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
        "backbone.select": '../node_modules/backbone.select/backbone.select',
        underscore: '../node_modules/underscore/underscore',
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
        json2: '../node_modules/json2/lib/JSON2/static/json2',
        text: '../node_modules/requirejs-text/text',
        tpl: "../node_modules/underscore-tpl/dist/underscore-tpl",
        marionetteUtil: "util/marionetteUtil"
    },
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    //非AMD规范库如backbone等库的配置,deps是依赖库
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
				'underscore',
				'jquery',
                'json2'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        "backbone.select": ["backbone"],
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        marionetteUtil: {
            deps: ["marionette"],
            exports: "MarionetteUtil"
        },
        tpl: ["underscore", "text"]
    }
});

//应用启动－〉js/app.js   
require([
  'app',
  "router/appRouter"
], function (app, appRouter) {
    app.start();
});
