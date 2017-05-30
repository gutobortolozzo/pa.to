module.exports = (sequelize, DataTypes) => {

    const Access = sequelize.define('Access', {
        key: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        isMobile: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isDesktop: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isBot: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        browser: {
            type: DataTypes.STRING(40),
            defaultValue: ""
        },
        version: {
            type: DataTypes.STRING(40),
            defaultValue: ""
        },
        platform: {
            type: DataTypes.STRING(40),
            defaultValue: ""
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
        region: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
        city: {
            type: DataTypes.STRING,
            defaultValue: ""
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

    return Access;
};