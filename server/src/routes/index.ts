import { Router } from "express";
import createUserRoute from "./User/createUser";
import deleteUser from "./User/deleteUser";
import getUser from "./User/getUser";
import userUpdate from "./User/updateUser";

const router = Router()

router.use('/',getUser)
router.use('/',createUserRoute)
router.use('/',userUpdate)
router.use('/',deleteUser)

export default router