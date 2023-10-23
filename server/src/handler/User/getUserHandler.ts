import { Request, Response } from 'express-serve-static-core';

import userController from "../../controller/User/getUserController";

const userHandler = async(req:Request,res:Response ) => {
    const { userName } : { userName?: string } = req.query;
    try {
        if (userName) {
            const findName = await userController({ userName });
            return res.status(200).json(findName);
        } 
        const findUser = await userController();
        return res.status(200).json(findUser);

    } catch (error:any) {
        return res.status(500).json({ error: error.message })
    }
};

export default userHandler;
