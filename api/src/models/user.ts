import {DataTypes, Model, Sequelize} from "sequelize";

export default class User extends Model {
    static initialize(sequelize: Sequelize){
        User.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                login: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: 'login',
                    validate: { isEmail: { msg: 'Must be a valid email address' } },
                },
                // role: {
                //     type: DataTypes.SMALLINT,
                //     allowNull: false,
                //     validate: {
                //         isIn: [Object.values(EnumRoles)],
                //     },
                //     defaultValue: EnumRoles.LECTURER,
                // },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'User',
                tableName: 'users',
                paranoid: true,
            }
        )
    }
};
