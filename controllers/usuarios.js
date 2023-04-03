const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = async(req=request, res=response) => {
    const { limite=5, desde=0 } = req.query;
    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({ total, usuarios });
};

const usuariosPost = async(req=request, res=response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    
    // Guardar en BD
    await usuario.save();

    res.status(201).json({ usuario });
};

const usuariosPut = async(req=request, res=response) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...rest } = req.body;

    // TODO: Validar contra BD
    if(password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, rest);

    res.json(usuario);
};

const usuariosPatch = (req, res=response) => {
    res.json({
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'delete API - controlador'
    });
};

module.exports = {
    usuariosDelete,
    usuariosGet,
    usuariosPatch,
    usuariosPost,
    usuariosPut,
};