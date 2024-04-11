const mongoose = require('mongoose');
const db_url = 'mongodb://localhost:27017/bespoke';

// connect to mongo db
exports.connect_db = ()=>{
    return mongoose.connect(db_url)
}
mongoose.connection.on('connected',connected=>{
    console.log("connected with mongoo");
});

//if connection failed
mongoose.connection.on('error',err=>{
    console.log('not connected');
})
// module.exports = connect_db