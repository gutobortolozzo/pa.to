module.exports = (sequelize, DataTypes) => {

    const URL = sequelize.define('URL', {
        key: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        link: {
            type      : DataTypes.TEXT,
            allowNull : false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'url',
        updatedAt: false,
        indexes: [
            {
                unique: true,
                fields: ['key']
            }
        ]
    });

    return URL;
};