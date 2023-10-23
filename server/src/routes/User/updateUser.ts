import { Router } from "express";
import updateHandler from "../../handler/User/updateHandlerUser";

const userUpdate = Router()

userUpdate.put('/updateUser/:id',updateHandler)

export default userUpdate