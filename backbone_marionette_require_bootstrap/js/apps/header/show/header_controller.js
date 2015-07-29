define(["app", "apps/header/show/header_view"], function (MyApp, View) {
    MyApp.module("HeaderApp.Show", function (Show, MyApp, Backbone, Marionette, $, _) {
        Show.Controller = {
            showHeader: function () {
                var model = {
                    'title': "UADB"
                };
                
             console.log("2");
                var view = new View.Header({ model: model });
                MyApp.regions.RHeader.show(view);
                
             console.log("4");
            }
        };
    });
    return MyApp.HeaderApp.Show.Controller;
});
