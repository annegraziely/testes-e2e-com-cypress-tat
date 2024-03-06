const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env:{
      viewportWidthBreakpoint: 768,
    }
    //defaultCommandTimeout: 30000,
  },
  projectId:'123db4a9-3af4-49db-a4b0-29c9e1be0416',
})
