import app from './src/app'
import dotenv from 'dotenv'
import {sequelize} from './src/db'

dotenv.config()

const {DB_PORT} = process.env


app.listen(DB_PORT, async()=>{
    await sequelize.sync({force:true})
    console.log('Serve listen on Port ' + DB_PORT)
})
