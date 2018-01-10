module.exports = {
    normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  
    afterInstall: function() {
      return this.addPackagesToProject([{name:'moment'}]); // is a promise
    }
  };