module.exports = function( app ) {
    app.get( "/Verification", function (req, res) {

        var arr = ["A", "B", "C", "D", "E", "F", "G",
                "H", "I", "J", "k", "M", "S", "N",
                "O", "P", "Q", "R", "S", "T", "U",
                "V", "W", "X", "Y", "Z", 1, 2, 3, 4, 5, 6, 7, 8, 9],
            str = "";

        for (var i = 0; i < 4; i++) {
            var key = Math.floor(Math.random() * 35);
            str += arr[key];
        }

        res.send(str);
        console.log( str )

    });
};
