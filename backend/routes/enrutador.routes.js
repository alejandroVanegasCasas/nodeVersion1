const express = require('express');
//const { Controller } = require('three/examples/jsm/libs/lil-gui.module.min.js');
const ControllerProductos = require('../controller/productos.controller');
const router = express.Router();

// router.get('/productos',(req,res)=>{
//     console.log("enrutando")
// })

router.get('/consultar',ControllerProductos.consultar);
//router.get('/consultarUno',ControllerProductos.consultarUno);

router.get('/registrar', ControllerProductos.mostrarFormularioRegistro);
router.post('/registrar',ControllerProductos.registrarProducto);

module.exports = router