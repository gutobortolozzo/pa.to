module.exports = (sequelize, DataTypes) => {

    const Access = sequelize.define('Access', {
        key: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'access',
        updatedAt: false,
        indexes: [
            {
                unique: false,
                fields: ['key']
            }
        ]
    });

    return URL;
};