
const {Schema, model } = require('mongoose');

const UsuarioSchema = new Schema ({
    nombre : {
        type: String,
        requiered: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        requiered: [true, 'El correo es oblogatorio'],
        unique: true
    },
    password: {
        type: String,
        requiered: [true, 'La contrasenia es oblogatoria']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        requiered: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});
module.exports = model( 'Usuario', UsuarioSchema);