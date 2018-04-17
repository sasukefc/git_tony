exports.render = function(req, res) {
    res.render('index', {
        title: 'Tony',
        username: req.user ? req.user.username : ''
    });
};