/**
 * Created by Administrator on 2016/3/17.
 */
define(function(){
    var News = Backbone.Model.extend({
        default:{
            id:"",
            title:'',
            clsname:'',
            desc:''
        },
        fetch:function(id){
            var self=this;
            var temNews;
            var dataFetch = $.getJOSN('data/' + id + '.json').success(function(data,status,xhr){
                self.set({id:data.id,title:data.title,clsname:data.clsname,desc:data.desc});
                self.trigger('GetDetail:Detail');
            })
        }
    })
})