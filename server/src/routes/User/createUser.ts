import { Router } from "express";
import createHandlerUser from "../../handler/User/createHandlerUser";

const createUserRoute = Router()

createUserRoute.post('/newUser',createHandlerUser)

export default createUserRoute