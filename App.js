Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    launch: function() {
      //Write app code here
      console.log("Our first app");
      var myStore = Ext.create('Rally.data.wsapi.Store', {
          model: 'User Story',
          autoLoad: true,
          listeners: {
              load: function(myStore, myData, success) {
                //process data
                console.log("got data from store: ", myStore, myData, success);
                var myGrid = Ext.create("Rally.ui.grid.Grid", {
                  store: myStore,
                  columnCfgs: [ "FormattedID", "Name", "ScheduleState" ]
                });
                console.log("myGrid: ", myGrid);

                this.add(myGrid);
                console.log("what is this? ", this);
              },
              scope: this
          },
          fetch: ['FormattedID', 'Name', 'ScheduleState']
      });
    }
});
