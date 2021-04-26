exports.config = {

    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [

    ],

    maxInstances: 1,
    capabilities: [

        {
            maxInstances: 1,
            browserName: 'firefox'
        }
    ],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://localcoding.us',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['geckodriver'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        // Babel setup
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },

   }
