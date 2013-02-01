module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index', {
            title: "(MD)&sup2; = Meet-up Marketing Dev Design"
        });
    });

    app.get('/new_group', function(req, res) {
        res.render('new_group', {
            title: "Test new new"
        });
    });

}