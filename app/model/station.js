Ext.define('HelloWorld.model.Station', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    proxy: {
        type: 'ajax',
        url: 'data/stations.json',
        reader: {
            type: 'json',
            root: 'results' 
        }
    }
});