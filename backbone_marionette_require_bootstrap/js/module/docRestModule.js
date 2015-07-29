define(["app", "marionetteUtil"], function (MyApp, MarionetteUtil) {
    MyApp.module("DocRestModule", {
        startWithParent: false,
        initialize: function (moduleName, app, options) {
            this.someProperty = 'someValue';

        },
        define: function (module) {
            "use strict";
            module.onStart = function (options) {
                console.log("DocRestModule start");
            };
            module.onStop = function (options) {
                console.log("DocRestModule stop");
            };
            //Model定义 
            module.Model = Backbone.Model.extend({ 
            });
            //ItemView 定义 
            module.View = Marionette.LayoutView.extend({
                tagName: 'div',
                id: 'container',
                template: MarionetteUtil.getTemplate("tmpl/tmplDocRest.html", {}),
                ui: {},
                events: {},
                /* when the view initializes, call initRouter to */
                initialize: function () { },
                render: function () { 
                    var that = this;
                    MarionetteUtil.renderView(that);
                }
            });
            module.start = function () {
                var vDocRest = new module.View({
                    model: new module.Model()
                });
                MyApp.regions.RContainer.empty();
                MyApp.regions.RContainer.show(vDocRest);
            }
        }
    });
    return MyApp.DocRestModule;
}); 