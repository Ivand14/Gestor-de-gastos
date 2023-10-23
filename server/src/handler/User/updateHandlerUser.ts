import { Request, Response } from "express";

import updateController from "../../controller/User/updateControllerUser";

const updateHandler = async(req:Request,res:Response) =>{
    const {id}= req.params
    const {userName,email,password}:{userName:string;email:string;password:string} = req.body
    try {
        if(!id) return res.status(404).json('Id is required')
        const updateUser = await updateController({id,userName,email,password})
        return res.status(200).json(updateUser)
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}

export default updateHandler