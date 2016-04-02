
module.exports = function(app, db) {
  app.get('/api/user/me', function(req, res) {
    if (typeof req.session.user === 'undefined') {
      res.send(JSON.stringify({}));
    } else {
      res.send(JSON.stringify(req.session.user));
    }
  });

  app.get('/api/user/logout', function(req,res) {
    req.session.user = {};
    res.redirect('/');
  });
}
