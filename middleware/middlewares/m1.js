const m1 = (req, res, next) => {
    req.m1 = 1;
    next();
}

module.exports = m1