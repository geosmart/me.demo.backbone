define(["app", "marionetteUtil"], function (MyApp, MarionetteUtil) {
    MyApp.module("SiteInfoModule", {
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
                id: 'siteInfo',
                tagName: 'div',
                template: MarionetteUtil.getTemplate("tmpl/tmplSiteInfo.html", {}),

                events: {},
                /* when the view initializes, call initRouter to */
                initialize: function () { },
                render: function () {
                    var that = this;
                    MarionetteUtil.renderView(that);
                }
            });
            module.start = function () {
                var vSiteInfo = new module.View({
                    model: new module.Model()
                });
                MyApp.regions.RSiteInfo.empty();
                MyApp.regions.RSiteInfo.show(vSiteInfo);
            }
        }
    });
    return MyApp.SiteInfoModule;
});

