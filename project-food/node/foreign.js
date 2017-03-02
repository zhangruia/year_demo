module.exports = function (app) {
    app.get( "/foreign",function (req,res) {
        var foreign = require( "../data/china_abroad" );
        res.send( foreign );
    } )
}