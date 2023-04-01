const { response, request } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req=request, res=response) => {
    const { q, nombre="No name", apikey, page=1, limit } = req.query;
    
    res.json({
        msg: 'get API - controlador',
        q, nombre, apikey, page, limit
    });
};

const usuariosPost = async(req=request, res=response) => {
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.status(201).json({ usuario });
};

const usuariosPut = (req=request, res=response) => {
    const id = req.params.id;

    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
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