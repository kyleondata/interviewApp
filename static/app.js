$(function(){

    var baseModel = Backbone.Model.extend({
        defaults: {
            title: 'Test';
        }
    });

    var baseCollection = Backbone.Collection.extend({
        model: baseModel
    });

    var baseView = Backbone.View.extend({
        
        render: function(){
            var html = '';
            this.collection.each(function(model){
                html += '<p>' + model.get('title') + '</p>';
            });
            $(this.el).html(html);
        }
    });

    var model = new baseModel();
    var col = new baseCollection();
    
    col.add(model);
    
    var view = new baseView({
        el:'#view',
        collection: col 
    });
    
});
