let mpAPI = require('../mpAPI')
let assert = require('assert')
try{
    mpAPI((body) => 
    {
        console.log(body)
        assert(body)
        assert(body)
        assert(body.routes)
        assert(body.boulders)
    })
}
catch (err)
{
    console.log(err)
}