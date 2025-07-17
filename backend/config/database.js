const mongoose = require('mongoose');

const connectDatabse = ( ) => {
    mongoose.connect(process.env.URI_DB ).then((data) => {
        console.log(`Database successfully connected with server: ${data.connection.host}`);
        
    })
}
module.exports = connectDatabse;