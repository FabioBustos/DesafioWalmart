
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("conect mongo...")
});


async function connectDB({hots,port,dbname}){
    const url = `mongodb://${hots}:${port}/${dbname}`
    mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true});


       
}

module.exports = connectDB; 