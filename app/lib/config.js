/*
*
Create and export configuration variables
*
**/
//container for all the environments
const environments = {}

//Testing environment
environments.testing={
    'httpPort':4000,
    'httpsPort':4001,
    'envName':'testing',
    'hashingSecret':'thisIsASecret',
    'maxChecks':5,
    'twilio' : {
        'accountSid' : 'ACb32d411ad7fe886aac54c665d25e5c5d',
        'authToken' : '9455e3eb3109edc12e3d8c92768f7a67',
        'fromPhone' : '+15005550006'
    },
    'templateGlobals':{
        'appName':'UpTimeChecker',
        'companyName':'NotARealCompany,Inc',
        'yearCreated':'2018',
        'baseUrl':'http://localhost:3000/'
    }
}

//Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV)==='string' ? 
process.env.NODE_ENV.toLowerCase():''

//Check that the current environment  was passed  as a command-line  argument
const environmentToExport = typeof(environments[currentEnvironment]) ==='object' ?
environments[currentEnvironment]:environments.staging

//export the module
module.exports = environmentToExport