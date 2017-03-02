module.exports = function (app, loginArr,url) {
    app.get( "/login" , function (req, res) {
        var past = url.parse(req.url, true).query;


        for (var i in loginArr) {
            if (past["tell"] == i) {
                res.send(loginArr[i].name);
                return;
            }
        }
        res.send("0");
    });
};