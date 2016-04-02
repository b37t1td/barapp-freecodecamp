var oAuth = require('oauth');

var consumer = new oAuth.OAuth(
    "https://twitter.com/oauth/request_token",
    "https://twitter.com/oauth/access_token",
    process.env.TWITTER_CUSTOMER_KEY,
    process.env.TWITTER_CUSTOMER_SECRET,
     "1.0A",
     "",
     "HMAC-SHA1");

module.exports = function(app, db) {
  app.get('/api/twitter/connect', function(req, res) {
      consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results) {
        if (error) {
          req.status(500).end();
        } else {
          req.session.oauthRequestToken = oauthToken;
          req.session.oauthRequestTokenSecret = oauthTokenSecret;
          res.redirect("https://twitter.com/oauth/authorize?oauth_token="+req.session.oauthRequestToken);
        }
      });
  });

  app.get('/api/twitter/callback', function(req, res) {
      consumer.getOAuthAccessToken(req.session.oauthRequestToken, req.session.oauthRequestTokenSecret, req.query.oauth_verifier,
        function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
        if (error) {
          res.status(500).end();
        } else {
          req.session.oauthAccessToken = oauthAccessToken;
          req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;

    	    consumer.get("https://api.twitter.com/1.1/account/verify_credentials.json",
            req.session.oauthAccessToken, req.session.oauthAccessTokenSecret, function (err, data, response) {
                if (err) return res.status(500).end();

                db.createLogin(data, function(err, data) {
                  if (err) return res.status(500).end();

                  req.session.user = data;
                  res.redirect('/');
                });
          });
        }
      });
  });
}
