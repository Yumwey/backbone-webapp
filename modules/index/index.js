/**
 * Created by Administrator on 2016/3/17.
 */
define(['jquery','underscore','backbone','text!modules/index/indexView.html'],
        function($,_,Backbone,indexViewTemplate){
            var indexView = Backbone.View.extend({
                template:_.template(indexViewTemplate),
                render:function(){
                    //$(this.el).html(this.template());
                    $(this.el).append(this.template());
                    return this;
                }
            });
            return indexView;
        }
)