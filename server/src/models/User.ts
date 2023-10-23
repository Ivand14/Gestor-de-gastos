import { DataTypes, Sequelize } from "sequelize";

export default (sequelize:Sequelize) => {
    sequelize.define('User',{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue: DataTypes.UUIDV4
        },
        userName:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps:false
    })
}