module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index', {
            title: "Meet-up Marketing-Dev-Design"
        });
    });
}