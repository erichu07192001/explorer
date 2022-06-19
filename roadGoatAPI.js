// run `npm install follow-redirects` before executing node test.js to ensure the library exists

var net = require('follow-redirects').https;
var fs = require('fs');
var auth_key = Buffer.from('81c85257ae30e682fec86153011f3f49:001e678e933bfe25aaef053b2a6cd837').toString('base64');

var options = {
  'method': 'GET',
  'hostname': 'api.roadgoat.com',
  'port': 80,
  'path': '/api/v2/destinations/new-york-ny-usa',
  'headers': {
    'Authorization': `Basic ${auth_key}`
  },
  'maxRedirects': 20
};

var req = net.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();