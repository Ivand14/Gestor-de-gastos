import { Request, Response } from "express"

import deleteController from "../../controller/User/deleteControllerUser"

const deleteHandler = async (req:Request,res:Response) => {
    const {id}= req.params
    try {
        const deleteUser = await deleteController({id})
        return res.status(200).json(deleteUser)
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}

export default deleteHandler