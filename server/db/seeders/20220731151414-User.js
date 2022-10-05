const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'paha',
      email: 'paha@mail.ru',
      password: await bcrypt.hash('paha@mail.ru', 2),
      photo: 'photo',
      coins: 999,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
