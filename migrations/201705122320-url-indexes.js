module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addIndex('url', ['key']);
    },

    down: async (queryInterface) => {
        await queryInterface.removeIndex('url', 'key');
    },
};