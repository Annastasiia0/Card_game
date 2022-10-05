module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Decks', [{

      // title: 'пират-вар',
      // active: false,
      // card_id: 1,

      name: 'пират-вар',
      user_id: 1,

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
