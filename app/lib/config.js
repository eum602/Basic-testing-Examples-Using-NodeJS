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
}

//Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV)==='string' ? 
process.env.NODE_ENV.toLowerCase():''

//Check that the current environment  was passed  as a command-line  argument
const environmentToExport = typeof(environments[currentEnvironment]) ==='object' ?
environments[currentEnvironment]:environments.staging

//export the module
module.exports = environmentToExport
