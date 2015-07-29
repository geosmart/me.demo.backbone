define(["app", "apps/footer/show/footer_view"], function (MyApp, View) {
    MyApp.module("FooterApp.Show", function (Show, MyApp, Backbone, Marionette, $, _) {
        Show.Controller = {
            showFooter: function () { 
                var view = new View.Footer();
                MyApp.regions.RFooter.show(view);
            }
        };
    });
    return MyApp.FooterApp.Show.Controller;
});
