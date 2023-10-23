import { Request, Response } from "express";

import createControllerUser from "../../controller/User/createControllerUser";

const createHandlerUser = async(req:Request,res:Response) =>{
    const {userName,email,password}:{userName:string;email:string;password:string} = req.body

    try {
        if(!userName || !email || !password) return res.status(404).json('Data missing')
        const userPost = await createControllerUser({userName,email,password}) 
        return res.status(200).json(userPost)
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }

}

export default createHandlerUser