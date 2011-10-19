Ext.define('HelloWorld.view.Home', {
    extend: 'Ext.Panel',
	alias: 'widget.home',
    layout: 'vbox',
    title: "Home View",
    config: {
		items: [
				{ 
					xtype: 'button', 					
					text: 'Say Hello' 
				},
				{ 
					xtype: 'button',
					id: 'firstButton',
					text: 'Say Hello again' 
				},
				{ 
					xtype: 'input', 
					id : 'bottomInput',
					value: 'Component Query "Ref" example' 
				},
				{
					html: ['The first button shows how to wire an event ',
					'in the controller to multiple items on the page. ',
					'The 2nd button shows how to bind to just one item using the id ',
					'and also how to reference another view instance using ',
					'a component query and automatically generated getter. ',
					'Make sure you have the console visible when you run this example'].join("")
				}
		]
	},
	initialize: function() {
		console.log('initialize home view');
		this.callParent();
	}
});
