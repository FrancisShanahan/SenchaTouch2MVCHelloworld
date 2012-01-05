Ext.define('HelloWorld.view.Home', {
    extend: 'Ext.Panel',
	alias: 'widget.home',
    layout: 'vbox',
    title: "Home View",
    config: {
		items: [
				{ 
					xtype: 'button', 					
					text: 'Say Hello (on the console)' 
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
				    html: [
                    '<h2>Make sure you have the console visible when you run this example. </h2>',
                    'This example creates a carousel with 2 views ',
                    '(slide right for the 2nd card). <br/>',
                    'The first card has a couple of buttons that show how ',
                    'the Controller is wired up to events on the View. ',
                    'The first button shows how to wire an event ',
					'in the controller to multiple items on the page. <br/>',
					'The 2nd button shows how to bind to just one item using the id ',
					'and also how to reference another view instance using ',
					'a component query and automatically generated getter. <br/>',					
					'The 2nd card loads data from a store using Ajax so you\'ll ',
					'need to host it on a web server to avoid an XHR exception.'].join("")
				}
		]
	},
	initialize: function() {
		console.log('initialize home view');
		this.callParent();
	}
});
