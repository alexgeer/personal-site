const express = require("express");

const logger = require('./lib/logger')
const path   = require("path")

const app = express()

//network variables
const port = process.env.PORT || 8080

logger.log(`starting, env=${process.env.NODE_ENV}`)
//turn on live reload for development
if(process.env.NODE_ENV === 'development')
{
    var livereload = require('livereload');
    var liveReloadServer = livereload.createServer();
    const watching = "/dist"
    liveReloadServer.watch(__dirname + watching);
    logger.log(`livereload watching ${watching}`)
}


app.use(express.static( path.join(__dirname, '../dist')));

logger.log(`serving static files from /dist`)

// Allows you to set port in the project properties.
app.set('port', port);

app.get('/lol', (req, res) => {
    //send the scaffold file
    res.json({msg:'lol'})
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    logger.log('get', req.ip)
    res.set('Cache Control', 'no-cache, no-store, must-revalidate')
    res.set('Pragma', '0')

    res.sendFile(path.join(__dirname,'index.html'));
});

const server = app.listen(app.get('port'), function() {
    logger.log(`listening on port ${port}`);
});