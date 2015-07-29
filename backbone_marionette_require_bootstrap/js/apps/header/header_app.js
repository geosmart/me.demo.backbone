define(["app", "apps/header/show/header_controller"], function (MyApp, HeaderController) {
    MyApp.module("HeaderApp", function (HeaderApp, MyApp, Backbone, Marionette, $, _) {
        var API = {
            showHeader: function () {
                HeaderController.showHeader();
            }
        };

        HeaderApp.addInitializer(function () {
             console.log("2");
            API.showHeader();
        });
    });

    return MyApp.HeaderApp;
});
