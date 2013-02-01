module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index', {
            title: "(MD)&sup2; = Meet-up Marketing Dev Design"
        });
    });
}