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
    "text": "Daily Chart for: ibm",
    "attachments": [
      {
        "text": "<http://chart.finance.yahoo.com...>",
        "image_url": "<http://chart.finance.yahoo.com...>"
      }
    ]
  }
  */
  res.setHeader('content-type', 'application/json');
  var chartUrl = "http://chart.finance.yahoo.com/t?lang=en-US&region=US&width=300&height=180&s=";
  var imageUrl = "http://www.jameshedberg.com/img/samples/carbon-nanotube-3D-model-axial.png";
  var symbol = req.body.text;
  chartUrl += symbol;
  console.log(chartUrl);
  var output = '{';
  output += '"response_type": "in_channel",';
  output += '"text":' + ' "' + 'Daily Chart for: ' + symbol + '" ,';
  output += '"attachments":';
  output += '[{';
  output += '"text":' + ' "<' + chartUrl + '>" ,';
  //output += '"image_url":' + ' "' + imageUrl + '"';
  output += '}]';
  output += '}';
  cb(null, output);
};
