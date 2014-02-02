_all_my_fields = [
                  "FormattedID",
                  "Name",
                  "ScheduleState",
                  "ObjectID",
                  "DirectChildrenCount",
                  "DefectStatus",
                  "Project",
                  "Iteration",
                  "Release",
                  "TaskStatus",
                  "CreationDate"
                 ];

Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    // Lanched by Rally App framework
    launch: function() {

      console.log("JP's BasicRallyGrid app running...");
      this._loadData();
    },

    // Get data from Rally
    _loadData: function() {

      var myStore = Ext.create('Rally.data.wsapi.Store', {
          model: 'User Story',
          autoLoad: true,
          listeners: {
              load: function(myStore, myData, success) {
                console.log("got data from store: ", myStore, myData, success);
                this._loadGrid(myStore);
              },
              scope: this
              },
          fetch: _all_my_fields
          });

    },

    // Create and display a grid of given stories
    _loadGrid: function(myStoreOfStories) {

      var myGrid = Ext.create("Rally.ui.grid.Grid", {
        store: myStoreOfStories,
        columnCfgs: _all_my_fields
      });

      this.add(myGrid);
      console.log("what is this? ", this);

    }

});
//the end
