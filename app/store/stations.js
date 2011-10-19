Ext.define('HelloWorld.store.Stations', {
    extend: 'Ext.data.Store',
    requires: 'HelloWorld.model.Station',
    model: 'HelloWorld.model.Station',
    autoLoad: true
});