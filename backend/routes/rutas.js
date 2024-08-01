const exp = require('express');
var router = exp.Router();
const ControllerProductos = require('../controller/productos')

router.get('/listarProductos', ControllerProductos.listarProductos)


module.exports = router;