const example = {}
//Sample for testing  that simply returns a number
example.getANumber = () =>{
    return 1
}

//init function
example.init = () =>{
    //this is an  error created intentionally (bar is not defined)
    let foo = bar
}

example.getAString = () => {
    return 'thisIsAString'        
}

//export the module
module.exports = example