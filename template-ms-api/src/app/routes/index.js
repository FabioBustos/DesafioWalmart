const { Router } = require('express')
const router = Router()
const baseUrl = `/api/${process.env.VERSION_APP}/${process.env.APP_PATH_SERVICE}`;
const routes = [];
const http = require('../../core/http')

router.get('/health', async(req, res) => {
    http.ok(res,{ message: "service runner .." })
})

/**
 * Muestra de las distintas rutas creadas
 */
console.log("********* Routes Avaibles ***********");
router.stack.forEach(middleware => {
    if (middleware.route) {
        let route = {};
        route.method = Object.keys(middleware.route.methods);
        route.path = baseUrl + middleware.route.path
        routes.push(route);
    }
});
console.table(routes);

module.exports = router;