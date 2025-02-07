const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter:'mochawesome',
     reporterOptions:{
      reportFilename: "[status]_[datetime]-[name]-report",
      timestamp: "longDate"
     },
    //   reportDir:'cypress/reports',
    //   html:true,
    //   json:true,
    //   overwrite:true
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl:'https://practicesoftwaretesting.com/'
  },
});
