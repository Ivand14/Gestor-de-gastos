import { Op } from "sequelize"

import { User } from "../../db"
interface Props{
    name?:string
}

const userController = async({name}:Props = {}) =>{
    if(name){
        const findName = await User.findOne({where:{
            name:{
                [Op.iLike] : `%${name}%`
            }
        }})
        return findName
    }else{
        const findAll = await User.findAll()
        return findAll
    }
}

export default  userController