module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('url', {
            key: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            link: {
                type      : DataTypes.TEXT,
                allowNull : false
            },
            createdAt : {
                type         : DataTypes.DATE,
                defaultValue : DataTypes.NOW
            }
        })
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('url')
    },
};