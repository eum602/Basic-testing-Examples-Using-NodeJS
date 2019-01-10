/**
 * This is the unit test
 * 
 */
//dependencies
const assert = require('assert')
const example = require('./../app/lib')
const _data = require('./../app/lib/data')
//Holder for test 
const unit = {}

//assert that the number function is returning a number
unit['example.getNumber should return a number'] = done =>{
    const val = example.getANumber()
    assert.equal(typeof(val),'number')
    done()
}

//assert that the number function is returning 1
unit['example.getNumber should return 1'] = done =>{
    const val = example.getANumber()
    assert.equal(val,1)
    done()
}

//assert that the number function is returning a number
unit['example.getNumber should return 2'] = done =>{
    const val = example.getANumber()
    assert.equal(val,2)
    done()
}


//Logs.list should callback an array and a false error
unit['example.getAString should return a string'] = done => {
    const str = example.getAString()
    assert.ok(typeof(str)==='string')//by ok it means truthy
    assert.ok(str.length>0)
    done()
}



// //logs.truncate should not throw if the logId does not exist
unit['_data.read should not throw if the folder or the file do not exist. It should callback an error instead'] = done => {
    assert.doesNotThrow(()=>{
        _data.read('abc','Any name',err=>{
            assert.ok(err)//error should be truthy at this point
            done()
        })
    },TypeError) //It does not throw a type error
}


// //exampleDebuggingProblem.init() should not throw(but it does)
unit['example.init()should not throw when called'] = done => {
    assert.doesNotThrow(()=>{
        example.init()
        done()
    },TypeError) //It does not throw a type error
}


//Export the test
module.exports = unit