const jwt = require('jsonwebtoken');
const config = require('../config/default.json');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res
            .status(401)
            .json({ err: 'Access denied , no token provided ...' });
    }
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.email = decoded.email;
        next();
    } catch (err) {
        res.status(401).json({ err: 'Token is not valid ' });
    }
};
