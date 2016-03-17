/**
 * Created by Administrator on 2016/3/17.
 */
define(['jquery','underscore','backbone','text!modules/list/newsView.html'],function($,_,Backbone,listViewTemplate){
    var listView=Backbone.View.extend({
        template: _.template(listViewTemplate),
        initialize:function(){
            this.collection.bind('GetList:list',this.render,this);
        },
        render:function(){
            $(this.el).append(this.template({data:this.collection.toJSON()}));
            this.trigger("renderList:list",this,"");
            return this;
        }
    });
    return listView;
})