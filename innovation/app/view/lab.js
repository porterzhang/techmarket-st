/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-29
 * Time: 上午10:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define('innovation.view.lab', {
    extend: 'Ext.tab.Panel',
    xtype: 'lab',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        layout:'card',
        items: [
            {
                xtype: 'toolbar',
                ui: 'dark',
                docked: 'top',
                title: '实验室',
                items: {
                    xtype: 'button',
                    text: '返回',
                    handler: function () {
                        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                    }
                }

            },
            {
                xtype: "dataview",
                data: [],
                scrollable: true,
                height: '100%',
                style: 'padding:10px 0',
                itemTpl: "<div style='text-align:center;'>"+"</div>",
                listeners: {
                    painted:function(){
                        Ext.Ajax.request({
                            url: this.api_url + '=listLaboratory',
                            params: {
                                //labName: "测试一下前台实验室" ,
                                // labId: "E3824F78A7851DF5E040A8C0F833721B"
                                //maxsize: "100"

                            },
                            scope: this,
                            success: function (response) {
                                var result = Ext.decode(response.responseText);
                                 this.data=result
                                console.log(this.data);
                            }
                        })

                    }

                }

            }
        ]
    }
});
