const exp = require('express');
const app = exp();
const modeloProducto = require('./backend/models/productos.model');

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

// let modeloProducto = require('./backend/models/productos.model')
// app.get('/productos', async (req,res)=>{
//     let listadoProductos = await modeloProducto.find();
//     res.status(200).json(listadoProductos);
// });

//consulta
app.get('/productos', async (req,res)=>{
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos)
        res.status(200).json(listadoProductos);
    else
        res.status(404).json({error: "No se encontraron productos"});
});

//consulta pasando un parametro
app.get('/productos/:ref', async (req,res)=>{
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({"error":"Producto no encontrado"});
});

//insercion

app.post('/productos',async(req,res)=>{
    const nuevoProducto = {
        referencia: req.body.referenciaProducto,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };

    let Insercion = await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje":"Se ha registrado correctamente"})
    else
        res.status(404).json({"mensaje":"Se ha presentado un error"})
});

//actualizacion
app.put('/productos/:ref', async (req,res)=>{
    const productoEditar = {
        referencia: req.params.ref,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };

    let Actualizacion = await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditar);
    if(Actualizacion)
        res.status(200).json({"mensaje":"Se ha actualizado correctamente..."})
    else    
        res.status(404).json({"mensaje":"Ha ocurrido un error..."})
});

//eliminar
// app.delete('/productos/:ref',async (req,res)=>{
//     console.log(req.params.ref , req.body.referenciaProducto)
//     let eliminacion = await modeloProducto.findOneAndDelete({referencia:req.params.ref});
//     if(eliminacion)
//         res.status(200).json({"mensaje":"Se ha eliminado correctamente..."})
//     else
//         res.status(404).json({"mensaje":"Ha ocurrido un error..."})
// });

app.delete('/productos/:ref', async (req, res) => {
    console.log(req.params.ref);
    let eliminacion = await modeloProducto.findOneAndDelete({ referencia: req.params.ref });
    if (eliminacion) {
        res.status(200).json({ "mensaje": "Se ha eliminado correctamente..." });
    } else {
        res.status(404).json({ "mensaje": "Ha ocurrido un error..." });
    }
});




app.listen(9090);