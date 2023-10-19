import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import router from './routes'

const app = express()
app.use(express.json())

app.use(morgan('dev'))
app.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}))
app.use(express.urlencoded({extended:true}))
app.use('/',router)

export default app
