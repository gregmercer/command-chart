var _    = require('lodash');
var util = require('util');

module.exports = commandChart;

function commandChart (token, options) {
  this.token = token;
  this.options = options;
}

commandChart.prototype.handle = function (req, cb) {
  var chartUrl = "http://chart.finance.yahoo.com/t?lang=en-US&region=US&width=300&height=180&s=";
  var symbol = req.body.text;
  console.log(symbol);
  cb(null, chartUrl+symbol);
};
