Ext.define('innovation.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    layout: 'card',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {  xtype: 'toolbar',
                ui: 'dark',
                title: '掌上创新',
                docked: 'top'
            }
//            {
//                xtype: "dataview",
//                data: [
//                    {
//                        iconUrl: 'resources/images/icon1.png',
//                        name: '实验室'
//                    },
//                    {
//                        iconUrl: 'resources/images/icon2.png',
//                        name: '研发中心'
//                    }
//                ],
//                scrollable: false,
//                height: '100%',
//                style: 'padding:10px 0',
//                itemTpl: "<div style='text-align:center; float: left; width: 33%;padding-top: 6px'>" +
//                    "<img src='{iconUrl}' height='70px' width='70px'/>" +
//                    "<div style='font-size: 12px; color: #ffffff;font-weight: normal;text-shadow: 0px 1px 1px #000;height:20px;line-height: 20px;overflow: hidden;>'{name}</div>" +
//                    "</div>",
//                listeners: {
//                    itemtap: function (list, index, element, record) {
//                        var lab = Ext.create('innovation.view.lab')
//                        Ext.Viewport.animateActiveItem(lab, {type: 'slide', direction: 'left'});
//
//                    }
//
//                }
//
//            }
        ]
    }
});
