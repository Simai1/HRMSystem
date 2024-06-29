import {DataTypes, Model, Sequelize} from "sequelize";

export default class TokenModel extends Model {
    static initialize(sequelize: Sequelize) {
        TokenModel.init(
            {
                isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
                refreshToken: { type: DataTypes.STRING, allowNull: false },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'TokenModel',
                tableName: 'token-model',
                paranoid: true,
            }
        );
    }
}
