const userModelo = require('../models/productos.model')




exports.consultar = async (req,res)=>{
    let lista = await userModelo.find();
    res.render('pages/index',{lista})
}

exports.mostrarFormularioRegistro = (req, res) => {
    res.render('pages/registrar'); 
};




exports.registrarProducto = async (req, res) => {
    const { referencia, nombre, descripcion, precio, stock, imagen, habilitado } = req.body;

    // Crear nuevo producto
    const nuevoProducto = new userModelo({
        referencia,
        nombre,
        descripcion,
        precio,
        stock,
        imagen,
        habilitado
    });

    // Guardar en la base de datos
    try {
        await nuevoProducto.save();
        res.redirect('/v1/mostrar'); // Redirigir a la página de mostrar productos
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// exports.consultarUno = async (req,res)=>{
//     let lista = await userModelo.findOne({referencia:req.params.ref});
//     res.render('pages/index')
// }

