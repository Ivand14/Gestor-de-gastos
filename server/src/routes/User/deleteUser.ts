import { Router } from "express";
import deleteHandler from "../../handler/User/deleteHandlerUser";

const deleteUser = Router()

deleteUser.delete('/deleteUser/:id',deleteHandler)

export default deleteUser