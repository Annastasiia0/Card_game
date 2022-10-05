module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweq',
        imageString: 'https://natpagle.ru/wp-content/uploads/2014/01/03_Ironbeak-Owl.jpg',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqeqwe',
        imageString: 'https://img3.goodfon.ru/wallpaper/nbig/6/a8/hearthstone-dwarves-karty.jpg',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqzzz',
        imageString: 'https://natpagle.ru/wp-content/uploads/2019/08/Corrupt-the-Waters-art.jpg',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqsdcsd',
        imageString: 'https://img.championat.com/s/735x490/news/big/w/g/chuvstvuju-segodnja-uslyshu-novuju-istoriju-koroleva-lana-tel-v-hearthstone_150098892117794793.jpg',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('bonus_cards', [
      {
        name: 'qweqasda',
        imageString: 'https://i.imgur.com/pYexxJb.png',
        info: '123',
        attack: 33,
        health: 33,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },



  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
