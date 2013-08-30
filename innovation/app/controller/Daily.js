Ext.define('innovation.controller.Daily', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.JsonP'],

    dailyId:'',
    createUser:'',
    config: {
        refs: {
            daily: 'daily',
            dailyDetail:'dailyDetail',
            dailyShare:'dailyDetail #dailyShare',
            recommend:'dailyDetail #recommend',
            reproduce:'dailyDetail #reproduce',
            score:'score #score'
        },
        control: {
            "daily list":{
                itemtap:function(list, index, element, record){
                    Ext.Viewport.animateActiveItem('dailyDetail', {type: 'slide', direction: 'left'});
                    Ext.getCmp('dailytitle').setHtml(
                        '<div style="text-align: center; font-size: 16px;">'+record.get('dailyTitle')+'</div>'+
                        '<div style="text-align: center; font-size: 12px;">'+
                            '<span>'+record.get('createUser')+'</span>'+'<span style="margin-left: 15px;">'+record.get('createDate')+'</span>'+
                        '</div>'
                    );
                    Ext.getCmp('dailycontent').setHtml(
                        '<div style="text-align: center; font-size: 14px;">'+record.get('dailyContent')+'</div>'
                    );
                    this.dailyId=record.get('dailyId');
                    this.createUser=record.get('createUser');

                }
            },
            'dailyShare':{
                tap:function(){
                    Ext.Viewport.mask({xtype: 'loadmask',message: '加载中...'});
                    var backid=this;
                    Ext.Ajax.request({
                        url: 'http://market.xayoudao.com/apiproxy.php?action=addShare',
                        scope: this,
                        params:{
                            dailyId:backid.dailyId,
                            createUser:backid.createUser
                        },
                        success: function (response) {
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['分享成功']);
                        },
                        failure: function () {//请求失败时执行操作
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['分享失败']);
                        }
                    })
                }
            },
            'score':{
                tap:function(){
                    Ext.Viewport.mask({xtype: 'loadmask',message: '加载中...'});
                    var backid=this;
                    Ext.Ajax.request({
                        url: 'http://market.xayoudao.com/apiproxy.php?action=saveOrUpdateScore',
                        scope: this,
                        params:{
                            dailyId:backid.dailyId,
                            createUser:backid.createUser,
                            score:Ext.getCmp('scoreNum').getValue()
                        },
                        success: function (response) {
                            Ext.Viewport.unmask();
                            Ext.Viewport.remove('score', true);
                            Ext.Viewport.animateActiveItem('dailyDetail', {type: 'slide', direction: 'left'});
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['评分成功']);
                        },
                        failure: function () {//请求失败时执行操作
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['分享失败']);
                        }
                    })
                }
            },
            'recommend':{
                tap:function(){
                    Ext.Viewport.mask({xtype: 'loadmask',message: '加载中...'});
                    var backid=this;
                    Ext.Ajax.request({
                        url: 'http://market.xayoudao.com/apiproxy.php?action=addDailyFeature',
                        scope: this,
                        params:{
                            dailyId:backid.dailyId,
                            createUser:backid.createUser,
                            featureId:'3423'
                        },
                        success: function (response) {
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['推荐成功']);
                        },
                        failure: function () {//请求失败时执行操作
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['推荐失败']);
                        }
                    })
                }
            },
            //转载
            'reproduce':{
                tap:function(){
                    Ext.Viewport.mask({xtype: 'loadmask',message: '加载中...'});
                    var backid=this;
                    Ext.Ajax.request({
                        url: 'http://market.xayoudao.com/apiproxy.php?action=addReproduce',
                        scope: this,
                        params:{
                            dailyId:backid.dailyId,
                            createUser:backid.createUser
                        },
                        success: function (response) {
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['转载成功']);
                        },
                        failure: function () {//请求失败时执行操作
                            Ext.Viewport.unmask();
                            cordova.exec(function (message) {
                            }, function (error) {
                            }, "Messages", "showMsg", ['转载失败']);
                        }
                    })
                }
            }
        }
    }
});