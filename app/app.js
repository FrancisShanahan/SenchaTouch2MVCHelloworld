Ext.Loader.setConfig({ enabled: true });

Ext.require([    
    'Ext.XTemplate',
    'Ext.Panel',
	'Ext.Button',
    'Ext.List'
]);

Ext.application({
	phoneStartupScreen: 'images/sencha_logo.png',
    name: 'HelloWorld',          
    controllers: ['Home'],		
	initialize: function () {
		console.log('app initialize');
		this.callParent();
	},	
	launch: function() {              
		console.log('app launch');
		var carousel = Ext.create('Ext.Carousel', {
		    fullscreen: true,
		    // clean instantiation using the widget.alias's defined
            // in each view
			items: [
                { xtype: 'simplelist' },
                { xtype: 'home' }
            ]
		});
    }
});