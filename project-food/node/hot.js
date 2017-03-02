module.exports = function( app ){
    var hot = require( "../data/china_hot" );
    app.get( "/hot",function( req,res ){
        res.send( hot )
    } )
}