import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
import egressModel from './models/Egress'
import incomeModel from './models/Income'
import userModel from '../src/models/User'

dotenv.config()
const {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false, native: false},
    );

userModel(sequelize)
egressModel(sequelize)
incomeModel(sequelize)

const {User,Egress,Income} = sequelize.models

User.hasMany(Income)
User.hasMany(Egress)


export{
    User,
    Egress,
    Income,
    sequelize
}

