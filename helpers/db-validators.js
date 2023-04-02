const Role = require("../models/role");

const esRoleValido = async(rol='') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol) {
        throw new Error(`El rol ${rol} no se encuentra registrado`)
    }
};

module.exports = { esRoleValido };