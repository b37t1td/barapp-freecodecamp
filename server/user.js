
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


  app.delete('/api/user/places/:id', function(req,res) {
    if (req.session.user && req.session.user.id) {
        db.findPlace(req.params.id, function(err, data) {
          if (err) return res.status(500).end();

          if (data.userId === req.session.user.id) {
            db.removePlace(req.params.id, function(err, data) {
              if (err) return res.status(500).end();
              res.send({});
            });
          } else {
            res.status(403).end();
          }
        });
    } else {
      res.status(403).end();
    }
  });

  app.get('/api/user/places', function(req,res) {
    if (req.session.user && req.session.user.id) {
      db.findUserPlaces(req.session.user.id, function(err, data) {
        if (err) return res.status(500).end();

        res.send(data).end();
      });
    } else {
      res.send({}).end();
    }
  });

  app.post('/api/user/going', function(req, res) {
    if (req.session.user && req.session.user.id) {
      var data = req.body;
      data.userId = req.session.user.id;

      db.insertUserPlace(data, function(err, c) {
        if (err) return res.status(500).end();
        res.send({});
      })
    } else {
      red.status(403).end();
    }
  });
}
