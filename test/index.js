/**
 * Test runner
 */
//Overrite the NODE_ENV variable
process.env.NODE_ENV = 'testing'
//Application logic gfor the test runner
const _app = {}

//container for the task
_app.tests = {}

//add on the unit test as a dependency
_app.tests.unit = require('./unit')

//count all the test
_app.countTests = () =>{
    let counter = 0
    for(let key in _app.tests){
        if(_app.tests.hasOwnProperty(key)){
            let subTests = _app.tests[key]
            for(let testName in subTests){
                if(subTests.hasOwnProperty(testName)){
                    counter++
                }
            }
        }
    }    
    return counter
}

//run all the tests, collecting the errors and successes
_app.runTests = () => {
    const  errors = []
    let successes = 0
    const limit = _app.countTests()
    let counter = 0
    for(let key in _app.tests){
        if(_app.tests.hasOwnProperty(key)){
            let subTests =  _app.tests[key]
            for(let testName in  subTests){
                if(subTests.hasOwnProperty(testName)){
                    (()=>{
                        let tmpTestName = testName
                        let testValue = subTests[testName]
                        //Call the test
                        try{
                            testValue(()=>{
                                //if it call back without throwung then it succeeded so log it in gree
                                console.log('\x1b[32m%s\x1b[0m',tmpTestName)
                                counter ++
                                successes++
                                if(counter===limit){
                                    _app.produceTestReport(limit,successes,errors)
                                }
                            })
                        }catch(e){
                            //if it throws , then it failed,  so capture the error thrown and log it in red
                            errors.push({
                                'name':testName,
                                'error':e
                            })
                            console.log('\x1b[31m%s\x1b[0m',tmpTestName)
                            counter++

                            if(counter===limit){
                                _app.produceTestReport(limit,successes,errors)
                            }
                        }
                    })()
                }
            }
        }
    }
}

//produce  a test outcome report
_app.produceTestReport = (limit,successes,errors)=>{
    console.log("")
    console.log("-------------------BEGIN TEST REPORT---------------------------")
    console.log("")
    console.log("Total tests: ", limit)
    console.log("Pass: ", successes)
    console.log("Fail: ", errors.length)
    console.log("")

    
    //If there are error, print them in detail
    if(errors.length>0){
        console.log("--------------------BEGIN ERROR DETAILS-----------------------------")
        console.log("")

        errors.forEach(testError=>{
            console.log('\x1b[31m%s\x1b[0m',testError.name)
            console.log(testError.error)
            console.log("")
        })
    }

    console.log("")
    console.log("--------------------END TEST REPORT-----------------------------")
    process.exit(0)
}


//run the test
_app.runTests()