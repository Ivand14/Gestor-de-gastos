import { User } from "../../db"

interface Props{
    userName:string
    email:string
    password:string
}

const createControllerUser = async({userName,email,password}:Props) =>{

    const [userCreate,create] = await User.findOrCreate({where:{
        userName,
        email,
        password
    }})

    if(!userCreate) throw new Error('User not found')

    return userCreate

}

export default createControllerUser