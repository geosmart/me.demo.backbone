define([ "marionette"], function (Marionette) {
    return { 
        getTemplate:function(url,data) { 
           return  Marionette.TemplateCache.prototype.loadTemplate(url, data); 
        },

        renderView: function (view) {
            //view.template为未渲染的html模板
            if (!view.model) {
                view.model = {};
            }
            var html = _.template(view.template)(view.model);
            view.$el.html(html);
        }
    }
});