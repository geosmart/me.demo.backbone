define(["marionette"], function (Marionette) {

    //加载模板
    Marionette.TemplateCache.prototype.loadTemplate = function (url, data) {
        var template = '';
        //var url = siteRoot + '/tmpl/' + templateId + '.html';

        // Load the template by fetching the URL content synchronously.
        Backbone.$.ajax({
            async: false,
            url: url,
            success: function (templateHtml) {
                template = _.template(templateHtml)(data);
            }
        });
        return template;
    };
     
    //初始化 
    var MyApp = new Marionette.Application();

    MyApp.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    MyApp.on("before:start", function () {
        console.info("app.before:start");
        var RegionContainer = Marionette.LayoutView.extend({
            el: "#app-container",

            regions: {
                RHeader: "#header",
                RImgCarousel: "#imgCarousel",
                RSiteInfo: "#siteInfo",
                RContainer: "#container",
                RFooter: "#footer"
            }
        });
        MyApp.regions = new RegionContainer();
    });

    MyApp.addInitializer(function () {
        console.log('Marionette initialize');
    });

    MyApp.on("start", function () {
        if (Backbone.history) {
            console.info("app:start");
            Backbone.history.start();
            MyApp.navigate("", true);
        }
    });

    return MyApp;
});
