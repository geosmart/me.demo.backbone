define(["app"], function (MyApp) {
    MyApp.module("MyAppRouter", function (MyAppRouter, MyApp, Backbone, Marionette, $, _) {
        
        //路由Controller
        var routeController = {
            home: function () {
                require(["apps/imgCarousel/imgCarousel_app", "module/siteInfoModule"], function (ImgCarouselApp,SiteInfoModule) {
                    routeController.clearMainTmpl();
                    routeController.loadHeaderAndFooter();

                    ImgCarouselApp.start(); 
                    SiteInfoModule.start();
                });
                //加载主页Container
            },
            //服务中心主页
            serviceIndex: function () {
                routeController.loadHeaderAndFooter();
                require(["module/docIndexModule"], function (DocIndexModule) {
                    routeController.clearMainTmpl(); 
                    DocIndexModule.start();
                });
            },
            restService: function () {
                routeController.loadHeaderAndFooter();
                require(["module/docRestModule"], function (DocRestModule) {
                    routeController.clearMainTmpl(); 
                    DocRestModule.start();
                });
            },
            javaService: function () {
                routeController.loadHeaderAndFooter();
            },
            notFound: function () {
                routeController.loadHeaderAndFooter();
                require(["module/notFoundModule"], function (NotFoundModule) {
                    routeController.clearMainTmpl(); 
                    NotFoundModule.start();
                });
            },
            //加载Header和Footer模块
            loadHeaderAndFooter: function () {
                require(["apps/header/header_app", "apps/footer/footer_app"],
                    function (HeaderApp, FooterModule) {
                        HeaderApp.start();
                        FooterModule.start();
                    });
            },
            //清空主页Container
            clearMainTmpl: function () {
                MyApp.regions.RImgCarousel.empty();
                MyApp.regions.RSiteInfo.empty();
                MyApp.regions.RContainer.empty();
            },
            onRoute: function (name, path) {
                MyApp.regions.RContainer.empty();
            }
        };

        MyAppRouter.on("start", function () {
            //路由定义 
            var appRouter = new Marionette.AppRouter({
                controller: routeController,
                appRoutes: {
                    "": "home",
                    "home": "home",
                    "service": "serviceIndex",
                    "service/rest": "restService",
                    "service/java": "javaService",
                    "notFound": "notFound"
                },
                onRoute: function (name, path, arg) {
                    if (_.isFunction(this.options.controller.onRoute)) {
                        this.options.controller.onRoute(name, path, arg);
                    }
                }
            });
        }); 
        return MyApp.MyAppRouter;
    });
});
