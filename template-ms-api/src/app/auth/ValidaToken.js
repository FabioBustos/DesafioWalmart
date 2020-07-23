const http = require('../../core/http')
const AuthController = require('../controllers/AuthController')

module.exports = {
    validarTokenRequest: async(req, res, next) => {

            if (req.headers['authorization']) {
                const validate = await AuthController.validateToken(req.headers['authorization']);
                if (validate.error) {
                    const error = { 
                        code: 401,
                        message: validate.message
                    }
                    http.error(res, error, 401)
                } else {
                    return next()
                }
            } else {
                const error = {
                    code: 401,
                    message: 'No se encontró Authorization de acceso'
                }
                http.error(res, error, 401)
            }

    }
}