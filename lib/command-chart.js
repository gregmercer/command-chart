var _    = require('lodash');
var util = require('util');

module.exports = commandChart;

function commandChart (token, options) {
  this.token = token;
  this.options = options;
}

commandChart.prototype.handle = function (req, res, cb) {
  res.setHeader('content-type', 'application/json');
  var chartUrl = "http://chart.finance.yahoo.com/t?lang=en-US&region=US&width=300&height=180&s=";
  var symbol = req.body.text;
  var output = '{"text":' + ' "<' + chartUrl+symbol + '>"' + ', "unfurl_media": true}';
  console.log(symbol);
  cb(null, output);
  //cb(null, '<'+chartUrl+symbol+'>');
};
