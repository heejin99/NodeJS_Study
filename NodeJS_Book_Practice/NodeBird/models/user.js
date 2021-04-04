const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.STRING(10),
                allowNull: true,
                defaultVaule: 'local',
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
        }, {
            sequelize: sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            coolate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.Post); // user와 post : 1대 n 관계
        db.User.belongsToMany(db.User, { // 팔로잉 팔로워 기능: n대 m
            foreignKey: 'followingId',
            as: 'Followers', // foreignKey와 반대되는 모델
            through: 'Follow', // 생성할 모델 이름
        });
        db.User.belongsToMany(db.User, {
            foreignKey: 'followerId',
            as: 'Followings',
            through: 'Follow',
        });
    }
}