define(["app", "text!apps/header/show/templates/tmpl_header.html"
], function (MyApp, tmpl) {
    MyApp.module("HeaderApp.Show.View", function (View, MyApp, Backbone, Marionette, $, _) {
        View.Header = Marionette.ItemView.extend({
            id: 'header',
            tagName: 'div',
            template: tmpl,
            events: {
                "click #ul-service": "navRoute"
            },
            /* when the view initializes, call initRouter to */
            initialize: function () {
                console.log("init HeaderApp.Show.View");
            },
            render: function () { 
                var that=this;
                require(["marionetteUtil"], function (MarionetteUtil) {
                    //why not load define ,no callback 
                    console.log("3");
                    
                    MarionetteUtil.renderView(that);
                });
            },
            navRoute: function (event) {
                var $btn = $(event.target);
                var type = $btn.attr("data-type");
                console.log("type:", type);
                if (type === "java") {

                } else if (type === "rest") {

                }
            }
        });
    });

    return MyApp.HeaderApp.Show.View;
});
