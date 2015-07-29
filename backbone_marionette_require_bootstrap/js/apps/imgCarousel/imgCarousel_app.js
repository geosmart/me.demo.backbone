define(["app", "bootstrap", "marionetteUtil"], function (MyApp, bootstrap, MarionetteUtil) {
    MyApp.module("ImgCarouselModule", {
        define: function (module) {
            "use strict";

            //Model定义 
            module.Model = Backbone.Model.extend({});

            //ItemView 定义 
            module.View = Marionette.LayoutView.extend({
                tagName: 'div',
                id: 'imgCarousel',
                template: MarionetteUtil.getTemplate("js/apps/imgCarousel/templates/tmpl_imgCarousel.html",{}),
                events: {
                },
                /* when the view initializes, call initRouter to */
                initialize: function () {
                    //this.initRouter();
                },
                render: function () {
                    var that = this;
                    MarionetteUtil.renderView(that);
                    $('.carousel', that.$el).carousel({
                    });
                }
            });

            //start监听
            module.start = function () {
                var view = new module.View({
                    model: new module.Model()
                });
                MyApp.regions.RImgCarousel.empty();
                MyApp.regions.RImgCarousel.show(view);
            };
        }
    });
    return MyApp.ImgCarouselModule;
});