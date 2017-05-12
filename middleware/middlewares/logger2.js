const logger2 = (req, res, next) => {
    console.log(req.body);
    next();
}

module.exports = logger2