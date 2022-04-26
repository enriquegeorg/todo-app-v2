module.exports = function(req, res, next) {
    //middleware to enable CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, Authorization, Accept, X-Requested-With, X-Access-Token');
    next();
}