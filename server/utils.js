var request = require('request');

var getClientAddress = function (req) {
    var ipaddr = require('ipaddr.js');
    var ipString = (req.headers["X-Forwarded-For"] ||
        req.headers["x-forwarded-for"] ||
        '').split(',')[0] ||
        req.connection.remoteAddress;

    if (ipaddr.isValid(ipString)) {
        try {
            var addr = ipaddr.parse(ipString);
            if (ipaddr.IPv6.isValid(ipString) && addr.isIPv4MappedAddress()) {
                return addr.toIPv4Address().toString();
            }
            return addr.toNormalizedString();
        } catch (e) {
            return ipString;
        }
    }
    return 'unknown';
};

module.exports = function(app, db) {
  app.get('/api/ip', function(req,res) {
    var ip = getClientAddress(req);

    request.get({
      url : 'http://api.db-ip.com/addrinfo?addr='+ip+'&api_key=' + process.env.IPDB_KEY,
      json : true
    }, function(err, resp, body) {
      if (err) return res.send({}, 500).end();
      res.send(JSON.stringify(body)).end();
    });
  });
}
