var _    = require('lodash');
var util = require('util');

module.exports = commandChart;

function commandChart (token, options) {
  this.token = token;
  this.options = options;
}

commandChart.prototype.handle = function (req, res, cb) {
  /*
  {
    "text": "<http://chart.finance.yahoo.com...>",
    "attachments": [
      { "image_url": "<http://chart.finance.yahoo.com...>" }
    ]
  }
  */
  res.setHeader('content-type', 'application/json');
  var chartUrl = "http://chart.finance.yahoo.com/t?lang=en-US&region=US&width=300&height=180&s=";
  var symbol = req.body.text;
  chartUrl += symbol;
  console.log(chartUrl);
  //var output = '<'+chartUrl+'>';
  //var output = '{"text":' + ' "<' + chartUrl + '>"' + ', "unfurl_link": true}';
  var output = '{';
  output += '"text":' + ' "' + 'Daily Chart for : ' + symbol + '" ,';
  output += '"attachments":' + '[';
  output += '{' + '"image_url":' + ' "' + chartUrl + '"' + '}';
  output += ']';
  output += '}';
  cb(null, output);
};
