const moment = require('moment')

logger = {}

logger.line = 0

function pad(pad, str, padLeft) {
    if (typeof str === 'undefined') 
      return pad;
    if (padLeft) {
      return (pad + str).slice(-pad.length);
    } else {
      return (str + pad).substring(0, pad.length);
    }
  }

logger.log = (...args) => 
    {
    logger.line++
    if(logger.line === 9999)
        logger.log = 0
    currentLine = pad('0000', logger.line, true)
    console.log(`${currentLine} ${moment.utc().toISOString()}`, args)
    }

module.exports = logger