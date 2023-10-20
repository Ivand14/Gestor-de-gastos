import { Request, Response } from "express";
import userController from "../../controller/User/getUserController";

const userHandler = async(req:Request,res:Response) => {
    const {name}:{name?:string} = req.query
    try {
        if(name){
            const findName = await userController({name})
            return res.status(200).json(findName)
        }else{
            const findUser = await userController()
            return res.status(200).json(findUser)
        }
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}

export default userHandler