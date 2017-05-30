module.exports = {
    up: async (queryInterface, DataTypes) => {

        await queryInterface.addColumn('access', 'country', {
            type: DataTypes.STRING,
            allowNull: false
        });

        await queryInterface.addColumn('access', 'region', {
            type: DataTypes.STRING,
            allowNull: false
        });

        await queryInterface.addColumn('access', 'city', {
            type: DataTypes.STRING,
            allowNull: false
        });
    },

    down: async (queryInterface) => {

        await queryInterface.removeColumn('access', 'country');
        await queryInterface.removeColumn('access', 'region');
        await queryInterface.removeColumn('access', 'city');
    }
};