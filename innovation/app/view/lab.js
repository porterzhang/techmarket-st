/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-29
 * Time: 上午10:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define('innovation.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {   xtype: 'toolbar',
                ui: 'dark',
                title: '掌上创新',
                docked: 'top'
            },
            {
                xtype: "dataview",
                data: [
                    {
                        xtype:'button',
                        value:'返回'
                    },
                    {
                        iconUrl: 'resources/images/icon1.png',
                        name: '实验室'
                    }

                ],
                scrollable: false,
                height: '100%',
                style: 'padding:10px 0',
                itemTpl: "<div style='text-align:center; float: left; width: 33%;padding-top: 6px'>" +
                    "<img src='{iconUrl}' height='70px' width='70px'/>" +
                    "<div style='font-size: 12px; color: #ffffff;font-weight: normal;text-shadow: 0px 1px 1px #000;height:20px;line-height: 20px;overflow: hidden;>'{name}</div>" +
                    "</div>",
                listeners: {
                    itemtap: function (list, index, element, record) {
                        var inforList = this.getInforList();
                        //地图
                        if (record.get('ccid') == 9) {
                            var lab = Ext.create('innovation.view.lab')
                            Ext.Viewport.animateActiveItem(lab, {type: 'slide', direction: 'left'});
                        }
                    }

                }

            }
        ]
    }
});
