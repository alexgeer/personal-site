let stockAPI = require('../stockAPI')

try{
    stockAPI('MSFT', (data) => 
    {
        console.log(data)
    })
}
catch (err)
{
    console.log(err)
}