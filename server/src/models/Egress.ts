import { DataTypes, Sequelize } from "sequelize";

export default(sequelize:Sequelize) =>{
    sequelize.define('Egress',{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            allowNull:false
        },
        describe:{
            type: DataTypes.STRING,
            allowNull:false
        },
        value:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        operation:{
            type: DataTypes.STRING,
            allowNull:false
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true
        },
        method:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })  
}