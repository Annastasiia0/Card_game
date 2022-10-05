


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('Packs', 'card_id',{
            type:Sequelize.DataTypes.INTEGER,
            references:{
                model:'Cards',
                key:'id'
            }
})
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Packs');
    },
}
