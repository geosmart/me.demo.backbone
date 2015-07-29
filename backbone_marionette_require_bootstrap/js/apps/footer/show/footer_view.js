define(["app", "text!apps/footer/show/templates/tmpl_footer.html"
], function (MyApp, tmpl) {
    MyApp.module("FooterApp.Show.View", function (View, MyApp, Backbone, Marionette, $, _) {
        View.Footer = Marionette.ItemView.extend({
            id: 'footer',
            tagName: 'div',
            template: tmpl, 
            /* when the view initializes, call initRouter to */
            initialize: function () {
                console.log("init FooterApp.Show.View");
            },
            render: function () { 
                var that=this;
                require(["marionetteUtil"], function (MarionetteUtil) {
                    //why not load define ,no callback
                    MarionetteUtil.renderView(that);
                });
            }
        });
    });

    return MyApp.FooterApp.Show.View;
});
