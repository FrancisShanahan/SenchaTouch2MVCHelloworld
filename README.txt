== Simple Sencha Touch 2.0 MVC application scaffold. 

This is a simple application which lays out the Model, View, Controller and Stores within a Sencha Touch 2.0 application. I looked long and hard but found no examples. This one was based loosely on the ExtJS4.0 MVC examples available on Sencha's website. 
It also demonstrates Component Queries and some other new features in 2.0 such as automatic "getter" generation. 

Put Sencha Touch in a folder named /touch 
e.g. /touch/sencha-touch-all-debug-w-comments.js
     /touch/resources/css/*
	 
Run the sample in Chrome and open up the Console (Ctrl-Shift-i).

The example creates a carousel with 2 views (slide right for the 2nd card).
The first card has a couple of buttons that show how the Controller is wired up to events on the View. 
The first button shows how to wire an event in the controller to multiple items on the page. 
The 2nd button shows how to bind to just one item using the id and also how to reference another view instance using a component query and automatically generated getter. 

The 2nd card loads data from a store using Ajax so you'll need to host it on a web server to avoid an XHR exception.

This is based on the Sencha Touch 2.0 Developer Preview (may break) as of Oct 11, 2011

-fs
http://FrancisShanahan.com
