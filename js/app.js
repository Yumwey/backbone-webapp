/**
 * Created by Administrator on 2016/3/17.
 */
ddefine(['jquery','underscore','backbone','router'],function($,_,Backbone,Router){
    var init = function(){
        var router = new Router();
        Backbone.history.start();
    };
    return {
        initialize:init
    }
})