import { Router } from "express";
import getUser from "./User/getUser";

const router = Router()

router.use('/',getUser)

export default router