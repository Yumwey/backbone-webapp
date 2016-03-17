/**
 * Created by Administrator on 2016/3/17.
 */
define(['jquery', 'underscore', 'backbone', 'modules/index/index', 'modules/list/news',
    'model/news/newsCollection', 'modules/detail/newsDetail', 'model/news/newsModel'],
    function($, _, Backbone, IndexView, NewsView, NewsCollection, NewsDetailView, News){
            var Router=Backbone.Router.extend({
                routes:{
                    '':'Index',
                    'index':'Index',
                    'list':'List',
                    'listdetail/:title/:id':'ListDetail'
                },
                firstPage:true,
                Index:function(actions){
                    var indexView = new IndexView();
                    indexView.render();
                    this.changePage(indexView);
                },
                //列表
                List:function(actions){
                    var newsList = new NewsCollection();
                    var newsView = new NewsView({collection:newsList});
                    newsView.bind('renderList:list',this.triggerChangeView,this);
                    newsList.fetch();
                },
                //获取详情
                ListDetail: function (name, id) {
                    var news = new News();
                    var newsDetailView = new NewsDetailView({ model: news });
                    newsDetailView.bind('renderDetail:Detail', this.triggerChangeView, this);
                    news.fetch(id);
                },

                triggerChangeView:function(view){
                    this.changePage(view);
                },

                changePage:function(view){
                    $(view.el).attr('data-role','page');
                    $('body').append($(view.el));
                    if (!this.firstPage) {
                        $.mobile.changePage($(view.el), { changeHash: false, transition: transition });
                    } else {
                        this.firstPage = false;
                    }
                }

            });
        return Router;
});