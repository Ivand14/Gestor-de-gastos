import { User } from "../../db"

interface Props {
    id:string
}

const deleteController= async({id}:Props) => {
    
    if(!id) throw new Error('Id Require')
    const deleteUser = await User.findOne({where:{id}})
    
    if(deleteUser){
        await deleteUser?.destroy()
        return {
            message:'User deleted'
        }
    }else{
        return {
            message:'Error deleting User'
        }
    }
    
}

export default deleteController