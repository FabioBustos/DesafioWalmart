
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const mongoose = require('mongoose')
const env = dotenv.config()
dotenvExpand(env)

const app = require('./app/app');
const dbConexion = require('./app/config/mongoose/config');
const walmartSchema = require('./app/schema/schemaWalmarrt');

async function main() {
    try {
        const PORT = process.env.PORT || 5000;
        await app.listen(PORT);

        const dbData ={
            hots:process.env.DB_HOST,
            port:process.env.DB_PORT,
            dbname:process.env.DB_DATABASE,
        }
        let db= await dbConexion(dbData) 
                
        const walmart = mongoose.model('data', walmartSchema);
        const docs = await walmart.find({});
        console.log(docs);

        let serverInfo = {
            "SERVICE": process.env.APP_NAME,
            "STATUS": "ok",
            "MSG": "Server Init",
            "PORT": PORT,
            "VERSION": process.env.VERSION_APP,
            "BASE_URL": process.env.BASE_URL,

        }
        console.table(serverInfo);
    } catch (error) {
        console.log(error)
        throw new Error("Internal Server Error");
    }
}

main();