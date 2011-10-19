Ext.Loader.setConfig({ enabled: true });

Ext.require([    
    'Ext.XTemplate',
    'Ext.Panel',
	'Ext.Button',
    'Ext.List'
]);

// Main application entry point
Ext.application({
	phoneStartupScreen: 'images/sencha_logo.png',
	name: 'HelloWorld',  
    // the controller will take care of creating the view        
	controllers: ['Home'],
	// You could delete this, here only to illustrate
    // the sequence of events		
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
                { xtype: 'home' },
				{ xtype: 'simplelist' }                
            ]
		});
    }
});