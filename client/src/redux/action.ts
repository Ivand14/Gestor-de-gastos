
export const TYPE_OPERATION:string = 'TYPE_OPERATION'
export const DELETE_OPERATION:string = 'DELETE_OPERATION'

interface operationType {
    type: typeof TYPE_OPERATION,
    payload: {
        describe:string,
        value:number,
        operation:string,
        type?:string,
        method?:string
    }
}




export const operations = (describe:string,value:number,operation:string,type:string,method:string):operationType => {

    console.log(describe,value,operation)
    return{
        type: TYPE_OPERATION,
        payload:{
            describe,
            value,
            operation,
            type,
            method
        }
    }
}

export const deleteOperation = (describe:string,value:number,operation:string):operationType=> {
    return{
        type: DELETE_OPERATION,
        payload:{
            describe,
            value,
            operation
        }
    }
}
