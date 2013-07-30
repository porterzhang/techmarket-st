/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-12
 * Time: 下午2:48
 * To change this template use File | Settings | File Templates.
 */

/*信息详情*/
Ext.define('more.view.moredetial', {
    extend: 'Ext.Container',
    xtype: 'moredetial',

    requires: [
        'Ext.data.Store',
        'Ext.field.Search',
        "Ext.dataview.List"
    ],
    config: {
        layout: 'vbox',
        style: 'background-color:rgb(209, 208, 208)',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                style: "line-height: 60px;font-size: 25px;border: 0px;background:url('resources/images/more_1.png') no-repeat;height:60px;background-size: 100% 100%;",
                id: 'titlebar',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        handler: function () {
                            Ext.Viewport.animateActiveItem('main', {type: 'slide', direction: 'left'});
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'content',
                flex: 5,
                scrollable: true,
                listeners: {
                    initialize: function () {
                        // Ext.Viewport.mask({xtype: 'loadmask' });
                        this.setHtml(
                            '<div style="padding: 10px 10px;font-size:16px">' +
                                '<div style="text-indent:2em">'
                                + "把 Web 页面上的段落的第一行缩进，这是一种最常用的文本格式化效果。"
                                + " CSS 提供了 text-indent 属性，该属性可以方便地实现文本缩进。注意：一般来说，可以为所有块级元素应用 text-indent，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性。不过，如果一个块级元素（比如段落）的首行中有一个图像，它会随该行的其余文本移动。"
                                + '</div>' +
                                '</div>'
                        )
//                        Ext.Ajax.request({
//                            url: Global.api_url + '/cloud/1/article_info_get',
//                            params: {caid: window.localStorage.getItem('MoreDetail_caid')},
//                            scope: this,
//                            success: function (response) {
//                                Ext.Viewport.unmask();
//                                var result = Ext.decode(response.responseText);
//                                data = result.Variables.data;
//                                var length=data.photos.length;
//                                var image='';
//                                //添加图片
//                                for(var i= 0;i<length;i++){
//                                    image+='<img src='+data.photos[i].url+' width="80%"  style="margin:0 10%" />'
//                                }
//                                Ext.getCmp('titlebar').setTitle(data.name);
//                                //加载咨询详细内容
//                                this.setHtml(
//                                    '<div style="padding: 10px 10px">' +
//                                        image+
//                                        '<div>' + data.content + '</div>' +
//                                        '</div>'
//                                )
//                            },
//                            failure: function () {
//                                Ext.Viewport.unmask();
//                                cordova.exec(function (message) {
//                                }, function (error) {
//                                }, "Messages", "showMsg", ['请求失败', '服务器维护中....']);
//                                return false;
//                            }
//                        })
                    }
                }
            }
        ],
        listeners: {
            back: function () {
                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
            }
        }
    }
});

