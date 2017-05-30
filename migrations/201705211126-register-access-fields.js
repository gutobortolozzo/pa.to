module.exports = {
    up: async (queryInterface, DataTypes) => {

        await queryInterface.addColumn('access', 'isMobile', {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        });

        await queryInterface.addColumn('access', 'isDesktop', {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        });

        await queryInterface.addColumn('access', 'isBot', {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        });

        await queryInterface.addColumn('access', 'browser', {
            type: DataTypes.STRING(40),
            allowNull: false
        });

        await queryInterface.addColumn('access', 'version', {
            type: DataTypes.STRING(40),
            allowNull: false
        });

        await queryInterface.addColumn('access', 'platform', {
            type: DataTypes.STRING(40),
            allowNull: false
        });
    },

    down: async (queryInterface) => {

        await queryInterface.removeColumn('access', 'isMobile');
        await queryInterface.removeColumn('access', 'isDesktop');
        await queryInterface.removeColumn('access', 'isBot');
        await queryInterface.removeColumn('access', 'browser');
        await queryInterface.removeColumn('access', 'version');
        await queryInterface.removeColumn('access', 'platform');
    }
};