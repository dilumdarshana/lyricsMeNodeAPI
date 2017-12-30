/**
 * Helper.js
 * All common functions should go here
 * 
 */
const helper = {

    // verify access token
    verifyToken(req, res, next) {
    
        // read header for access token
        const accessToken = req.headers['access_token'];
    
        if (accessToken) {
    
            req.token = accessToken;
    
            next();
    
        } else {
    
            res.status(403).json({
                message: "Unauthorized"
            });
        }
    }
}

module.exports = helper;
