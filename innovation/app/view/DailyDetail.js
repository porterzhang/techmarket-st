/*信息列表*/
Ext.define('innovation.view.DailyDetail', {
    extend: 'Ext.Panel',
    xtype: 'dailyDetail',
    requires:[
        'Ext.data.Store',
        'Ext.field.Search',
        "Ext.dataview.List"
    ],
    config:{
        layout:'vbox',
        scrollable:true,
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'日志',
                items:{
                    xtype:'button',
                    text:'返回',
                    handler:function(){
                        Ext.Viewport.remove(this.up('dailyDetail'), true);
                        Ext.Viewport.animateActiveItem('daily', {type: 'slide', direction: 'left'});
                    }
                }
            },
            {
                id:'dailytitle',
                xtype:'panel',
                flex:1
            },
            {
                xtype:'panel',
                layout:'hbox',
                flex:1,
                style:'text-align:center',
                items:[
                    {
                        id:'dailyShare',
                        xtype:'button',
                        text:'分享'
                    },
                    {
                        xtype:'button',
                        text:'评分',
                        handler:function(){
                            Ext.Viewport.animateActiveItem('score', {type: 'slide', direction: 'left'});
                        }
                    },
                    {
                        id:'recommend',
                        xtype:'button',
                        text:'推荐'
                    },
                    {
                        xtype:'button',
                        text:'评论'
                    },
                    {
                        id:'reproduce',
                        xtype:'button',
                        text:'转载'
                    },
                    {
                        xtype:'button',
                        text:'存档'
                    }
                ]
            },
            {
                id:'dailycontent',
                xtype:'panel',
                flex:7
            }
        ],listeners: {
            back: function () {
//                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
            }
        }

    }

});

