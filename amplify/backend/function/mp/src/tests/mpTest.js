let mpAPI = require('../mpAPI')

try{
    mpAPI((routes,ticks) => 
    {
        console.log(routes,ticks)
    })
}
catch (err)
{
    console.log(err)
}