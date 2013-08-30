/*信息列表*/
Ext.define('innovation.view.Score', {
    extend: 'Ext.Panel',
    xtype: 'score',
    requires:[
        'Ext.data.Store',
        'Ext.field.Search',
        "Ext.dataview.List",
        'Ext.field.Spinner'
    ],
    config:{
        layout:'vbox',
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'评分',
                items:{
                    xtype:'button',
                    text:'返回',
                    handler:function(){
                        Ext.Viewport.remove(this.up('score'), true);
                        Ext.Viewport.animateActiveItem('dailyDetail', {type: 'slide', direction: 'left'});
                    }
                }
            },
            {
                xtype:'spinnerfield',
                id:'scoreNum',
                label: '分数',
                minValue: 0,
                maxValue: 5,
                stepValue: 1,
                value:5,
                cycle: true
            },
            {
                xtype:'button',
                text:'提交',
                id:'score'
            }
        ],listeners: {
            back: function () {
//                Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
            }
        }

    }

});

