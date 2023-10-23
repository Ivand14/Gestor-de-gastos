import { Egress, Income, User } from "../../db"

import { Op } from "sequelize"

interface Props{
    userName?:string
}

const userController = async({userName}:Props = {}) =>{
    
    if(userName){
        const findName = await User.findAll({where:{
                userName:{
                    [Op.iLike] : `%${userName}%`
                },
            },
            include:[
                {
                    model:Income
                },
                {
                    model:Egress
                }
            ]
        }
        )
        return findName
    }

    const findAll = await User.findAll()
    return findAll
    
}

export default  userController