const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// provides information about our connection to our database
// included in the form of an object
const db = mongoose.connection; 

db.on('connected', () => {
    // the connection.on method allows us to register even listeners
    // for various mongoose related events
    console.log(`connected to MongoDB using ${db.name} at ${db.host}:${db.port}`);
});