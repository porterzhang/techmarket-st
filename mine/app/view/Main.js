//更多
Ext.define('more.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet'
    ],

    config: {
        layout: {
            type: 'card'
        },
        style: 'background-color:rgb(209, 208, 208)',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '个人信息设置',
                style: "line-height: 60px;font-size: 25px;border: 0px;background:url('resources/images/more_1.png') no-repeat;height:60px;background-size: 100% 100%;"
            },
            {
                xtype: 'panel',
                scrollable: true,
                style: 'background: rgb(209, 208, 208)',
                items: [
                    {
                        xtype: 'fieldset',
                        cls: 'moreFrom',
                        align: 'center',
                        style: 'background-color:rgb(209, 208, 208)',
                        items: [
                            {
                                xtype: 'label',
                                html: '<div class="moreFrom2 moreFont1">' +
                                    '<img id="userphoto">'+
                                    '<span>上传头像</span>' +
                                    '<img id="img_one" src="resources/images/go_0.png" class="moreFrom_go"/>' +
                                    '</div>',
                                listeners: {
                                    painted: function (label) {
                                        label.on('tap', function () {
                                            console.log("上传图像")
                                        }, this);
                                    }

                                }
                            },
                            {   xtype: 'label',

                                html: '<div class="moreFrom2 moreFont1">' +
                                    '<span>昵称</span>' +
                                    '<span>科技市场</span>'+
                                    '<img src="resources/images/go_0.png" class="moreFrom_go"/>' +
                                    '</div>',
                                listeners: {
                                    painted: function (label) {
                                        label.on('tap', function () {
                                            document.getElementsByTagName('img').src = 'resources/images/go_1.png'
                                            Ext.Viewport.animateActiveItem('moredetial', {type: 'slide', direction: 'left'});

                                            return false;
                                        }, this);
                                        label.on('hover', function () {
                                            console.log("focus");
                                            document.getElementsByTagName('img').src = 'resources/images/go_1.png'
                                        })
                                    }

                                }
                            },
                            {   xtype: 'label',

                                html: '<div class="moreFrom2 moreFont1">' +
                                    '<span>签名</span>' +
                                    '<span>用心和时间去看一个人</span>'+
                                    '<img src="resources/images/go_0.png" class="moreFrom_go"/>' +
                                    '</div>',
                                listeners: {
                                    painted: function (label) {
                                        label.on('tap', function () {
                                            document.getElementsByTagName('img').src = 'resources/images/go_1.png'
                                            Ext.Viewport.animateActiveItem('moredetial', {type: 'slide', direction: 'left'});

                                            return false;
                                        }, this);
                                        label.on('focus', function () {
                                            console.log("focus");
                                            document.getElementsByTagName('img').src = 'resources/images/go_1.png'
                                        })
                                    }
                                }
                            },
                            {   xtype: 'label',
                                html: '<div class="moreFrom2 moreFont1" style="border:0px">' +
                                    '<span>关于</span>' +
                                    '<img src="resources/images/go_0.png" class="moreFrom_go"/>' +
                                    '</div>',
                                listeners: {
                                    painted: function (label) {
                                        label.on('tap', function () {
                                            document.getElementsByTagName('img').src = 'resources/images/go_1.png'
                                            Ext.Viewport.animateActiveItem('moredetial', {type: 'slide', direction: 'left'});

                                            return false;
                                        }, this);
                                        label.on('focus', function () {
                                            console.log("focus");
                                            document.getElementsByTagName('img').src = 'resources/images/go_1.png'
                                        })
                                    }
                                }
                            }
                        ]


                    },
                    {
                        xtype: 'fieldset',
                        cls: 'moreFrom',
                        id: 'moreFrom',
                        align: 'center',
                        items: [
                            {
                                xtype: 'label',
                                html: '<div class="moreFrom2 moreFont1" style="border:0px">' +
                                    '<span >清理缓存</span>' +
                                    '<img src="resources/images/go_0.png" class="moreFrom_go"/>' +
                                    '</div>'
                            }

                        ]
                    },
                    {
                        xtype: 'button',
                        text: '退出登录',
                        cls: 'button'
                    }
                ]
            }
        ]
    }
});


