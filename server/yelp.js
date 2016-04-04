var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.YELP_CUSTOMER_KEY,
  consumer_secret: process.env.YELP_CUSTOMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
});

module.exports = function(app, db) {

  app.get('/api/yelp/search/:location/:term', function(req, res) {
    var opts = {
      term: decodeURIComponent(req.params.term).replace(/\s/gi,'+'),
      location : decodeURIComponent(req.params.location).replace(/\s/gi,'+')
    }

    if (typeof req.query.limit !== 'undefined' && req.query.offset !== 'undefined') {
      opts.limit = Number(req.query.limit);
      opts.offset = Number(req.query.offset);
    }

    yelp.search(opts)
      .then(function (data) {
        res.send(JSON.stringify(data)).end();
      })
      .catch(function (err) {
        res.send({}).end();
      });
  });
}
