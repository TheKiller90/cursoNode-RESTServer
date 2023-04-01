const { response, request } = require('express');

const usuariosGet = (req, res=response) => {
    res.json({
        msg: 'get API - controlador'
    });
};

const usuariosPost = (req=request, res=response) => {
    // const { nombre, edad } = req.body;
    const body = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        ...body
        // nombre, edad
    });
};

const usuariosPut = (req, res=response) => {
    res.status(500).json({
        msg: 'put API - controlador'
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