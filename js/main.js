/**
 * Created by Administrator on 2016/3/17.
 */
require.config({
    paths:{
        jquery:'script/jqm/jquery-1.8.2.min',
        underscore:'script/underscore/underscore-amd',
        backbone:'script/backbone/backbone-amd',
        text: 'plugins/text',
        templates: '../templates',
        modules: '../modules',
        model: '../model',
        amaze:'plugins/amazeui.min'
    },

    shim:{
        underscore:{
            exports:'_'
        },
        backbone:{
            deps:[
                'underscore',
                'jquery'
            ],
            exports:'Backbone'
        }
    }
});
require(['app'],function(app){
    app.initialize();   //≥ı ºªØ
})