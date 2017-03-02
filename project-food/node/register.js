module.exports = function (app, loginArr,url) {
   app.get("/register", function (req, res) {

        query = url.parse(req.url, true).query;

        console.log(req.url)

        if (loginArr[query.tell] && query.tell) {
            res.send("0");
        } else {
            loginArr[query.tell] = {
                "pass": query.password,
                "name": "未命名"
            };
            res.send("1");
        }

    });
};