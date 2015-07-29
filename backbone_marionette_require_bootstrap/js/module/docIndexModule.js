define(["app", "marionetteUtil"], function (MyApp, MarionetteUtil) {
    MyApp.module("DocIndexModule", {
        startWithParent: false,
        initialize: function (moduleName, app, options) {
            this.someProperty = 'someValue';
        },
        define: function (module) {
            "use strict";
            //Model定义 
            module.Model = Backbone.Model.extend({ 
            });
            //ItemView 定义 
            module.View = Marionette.LayoutView.extend({
                tagName: 'div',
                id: 'container',
                template: MarionetteUtil.getTemplate("tmpl/tmplDocIndex.html", {}),
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
                var vDocIndex = new module.View({
                    model: new module.Model()
                });
                MyApp.regions.RContainer.empty();
                MyApp.regions.RContainer.show(vDocIndex);
            }
        } 
    });
    return MyApp.DocIndexModule;
}); 