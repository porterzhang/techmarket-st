/*信息列表*/
Ext.define('innovation.view.Daily', {
    extend: 'Ext.Panel',
    xtype: 'daily',
    requires:[
        'Ext.data.Store',
        'Ext.field.Search',
        "Ext.dataview.List"
    ],
    config:{
        layout:'card',
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'日志'
            },
            {
                xtype:'list',
                emptyText:'暂无内容',
                itemTpl:
                    "<span>{dailyTitle}</span>"+
                    "<span style='float: right'>{createDate}</span>",
                listeners:{
                    initialize:function(){
                        Ext.Viewport.mask({xtype: 'loadmask',message: '加载中...'});
                        backid=this;
                        Ext.Ajax.request({
                            url: 'http://market.xayoudao.com/apiproxy.php?action=listDaily',
                            scope: this,
                            success: function (response) {
                                Ext.Viewport.unmask();
                                var result = Ext.decode(response.responseText);
                                backid.setData(result.root.data.DailysList);
                            }
                        })
                    }
                }
            }
        ],listeners: {
            back: function () {
//                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
            }
        }

    }

});

