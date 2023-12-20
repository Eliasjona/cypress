const { defineConfig } = require("cypress");

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};


module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  

});



