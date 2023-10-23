import { User } from "../../db";

interface Props {
    id:string,
    userName:string,
    email:string,
    password:string
}

const updateController = async({id,userName,email,password}:Props) =>{
    const updateUser = await User.update(
        {userName,email,password},
        {where:{
            id
        }}
    )

    return {
        message:'User updated'
    }

}

export default  updateController 