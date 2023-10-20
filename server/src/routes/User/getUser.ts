import {Router} from 'express'
import userHandler from '../../handler/User/getUserHandler'

const getUser = Router()

getUser.get('/Users',userHandler)

export default getUser