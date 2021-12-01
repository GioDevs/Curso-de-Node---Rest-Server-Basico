const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        const URI = process.env.MONGOD_CNN;
        await  mongoose.connect(URI);
        console.log('Base de datos online')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error al inicializar la base de datos');
    }


}

module.exports ={
    dbConnection
}