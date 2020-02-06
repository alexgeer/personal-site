let request = require("request");
let url = require("url");

let apikey = 'Q1ZI9DTH53TCPXTY'

function stockAPI(symbol, cb) {

    let arg = url.format({
        protocol: "https",
        hostname: "www.alphavantage.co",
        pathname:'/query',
        query: {
          function:'TIME_SERIES_DAILY',
          symbol,
          apikey
        }
      });

      request(arg, (err, res, body) => {
        if (err) throw err;
        
        cb(body)
      })
}

module.exports = stockAPI