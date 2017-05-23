module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('access', {
            key: {
                type: DataTypes.INTEGER,
            },
            createdAt : {
                type         : DataTypes.DATE,
                defaultValue : DataTypes.NOW
            }
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('access')
    }
};