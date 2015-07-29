define(["app", "apps/footer/show/footer_controller"], function (MyApp, FooterController) {
    MyApp.module("FooterApp", function (FooterApp, MyApp, Backbone, Marionette, $, _) {
        var API = {
            showFooter: function () {
                FooterController.showFooter();
            }
        };

        FooterApp.addInitializer(function () {
            API.showFooter();
        });
    });

    return MyApp.FooterApp;
});
