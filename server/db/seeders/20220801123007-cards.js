module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
        //attack
        //health
        //mana
        //info spell:description
        //imageString (foto)
        //name
      {
        name: 'Polyasha',
        imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        info: 'Taunt',
        attack: 2,
        health: 3,
        mana: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Polina',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HVD5B086-cf4ff759fef7-512',
      info: 'Charge',
      attack: 3,
      health: 1,
      mana: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Adam',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LY2XGBGE-56b80e6a8e74-512',
      info: '',
      attack: 4,
      health: 5,
      mana: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Sasha',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03K3JVE988-4fb3cd786a1a-512',
      info: 'Taunt',
      attack: 3,
      health: 8,
      mana: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Artem',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HQMR0S07-039523666e5c-512',
      info: 'Battlecry: Забирает карту из колоды',
      attack: 2,
      health: 1,
      mana: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Anya',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MFMM56FJ-5cfebfdbfd43-512',
      info: 'Charge',
      attack: 9,
      health: 9,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Damir',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JAUBQLA1-f0a832383b6d-512',
      info: '',
      attack: 5,
      health: 9,
      mana: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lena K',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J37X5HHB-0361cf6ea93f-512',
      info: 'Battlecry: Забирает карту из колоды',
      attack: 2,
      health: 3,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kiril',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JEBVTG1H-3dc19c056464-512',
      info: 'Восстанавливает 3хп герою,наносит 2 урона противнику',
      attack: 2,
      health: 2,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Leila',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JJQKB1GR-58763725019a-512',
      info: 'Taunt',
      attack: 4,
      health: 12,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kadj',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J3CX6XHU-f14b29716e74-512',
      info: 'Charge',
      attack: 2,
      health: 1,
      mana: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Maksimilian',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J5TGFF0D-07c995e0f9f3-512',
      info: 'Charge',
      attack: 5,
      health: 5,
      mana: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Bublitos',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HVP5Q207-57b4ec11c38b-512',
      info: 'Taunt и Battlecry: вызывает копию существа',
      attack: 3,
      health: 3,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yura',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J34GTK53-911def767cdf-512',
      info: 'Taunt',
      attack: 10,
      health: 10,
      mana: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ulyana',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JCGPJH2Q-0bf567dd1de1-512',
      info: 'Charge. Battlecry: вызывает двух бойцов 1/1 оппоненту',
      attack: 5,
      health: 2,
      mana: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yurec',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JSHCUAL9-9e5e7fb1db94-512',
      info: '',
      attack: 6,
      health: 7,
      mana: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vadim',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03Q45GLBFS-dee6c2dc4b00-512',
      info: 'Battlecry: Забирает карту из колоды',
      attack: 4,
      health: 2,
      mana: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vadim Z',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PAAJQ69K-4137f4294b84-512',
      info: 'Taunt',
      attack: 1,
      health: 2,
      mana: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vika Zh',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PAQ0U8DT-9e285827a747-512',
      info: 'Taunt',
      attack: 3,
      health: 3,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vika S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LS676V53-cbe83707462e-512',
      info: 'Taunt',
      attack: 3,
      health: 5,
      mana: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vladimir',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03P34HBE07-fb6e305194af-512',
      info: '',
      attack: 3,
      health: 9,
      mana: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Danil',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUUQD03D-2eb4e2e863bb-512',
      info: 'Divine Shield',
      attack: 3,
      health: 1,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Denis O',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PKV9PGMB-ea9bcde376f5-512',
      info: 'Taunt',
      attack: 5,
      health: 4,
      mana: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Katya E',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LVH17Q1H-b66bf1b87c35-512',
      info: 'Charge',
      attack: 2,
      health: 5,
      mana: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Elena K',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PG7T3VSA-12d76352dda5-512',
      info: '',
      attack: 4,
      health: 3,
      mana: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Igoryan',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HUN523PG-de7d73fa0581-512',
      info: 'Charge или Divine Shield (случайно)',
      attack: 8,
      health: 4,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Igor S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M9KQ3604-a1967ec1c61b-512',
      info: 'Battlecry: каждый игрок берет по карте',
      attack: 5,
      health: 5,
      mana: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'ILya M',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03ME2GKZLZ-0621e197e6db-512',
      info: 'Charge',
      attack: 1,
      health: 1,
      mana: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'ILya P',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MK4SUS6M-a439a57a95d4-512',
      info: '',
      attack: 2,
      health: 7,
      mana: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kiruha',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PT0WR3H7-2b43c9386e57-512',
      info: 'Charge',
      attack: 8,
      health: 9,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kristina S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUNZ7J2X-b058b4b39db4-512',
      info: 'Battlecry:восстанавливает 8 хп герою',
      attack: 8,
      health: 8,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Alisa',
      imageString: 'https://imageup.ru/img17/3990045/img_4198-1.jpg',
      info: 'Battlecry: Наносит 4урона врагу,излечивает на 4хп героя',
      attack: 8,
      health: 4,
      mana: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lubov',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M66SL76H-a3e7653c400e-512',
      info: 'Taunt(есть,но не точно), Divine Shield',
      attack: 4,
      health: 5,
      mana: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Aleksandra',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M0G8NXF0-6b719a60b187-512',
      info: '',
      attack: 4,
      health: 8,
      mana: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Maksim P',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PER5E4P9-a826a23b43ef-512',
      info: '',
      attack: 2,
      health: 3,
      mana: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Mariya E',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MK13SZ9N-e29282d28643-512',
      info: 'Taunt',
      attack: 1,
      health: 3,
      mana: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nikita K',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J2JLQ259-b194a5a60889-512',
      info: 'Divine Shield',
      attack: 5,
      health: 4,
      mana: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nikitos',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HV4XL32A-36d7d5744884-512',
      info: '',
      attack: 4,
      health: 5,
      mana: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Maria',
      imageString: 'https://imageup.ru/img149/3990076/8660c4c4-d176-40fb-a2c9-a27ed7d20b5a.jpeg',
      info: '',
      attack: 4,
      health: 6,
      mana: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Pasha S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JUHU5BQQ-1e288bef279a-512',
      info: 'Battelcry: призывает кабана 1/1',
      attack: 2,
      health: 4,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Andrei N',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03NZ583R7H-fb6eec9927bd-512',
      info: '',
      attack: 3,
      health: 3,
      mana: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Sergei S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03ML7EGEDN-8583b8e46402-512',
      info: '',
      attack: 1,
      health: 3,
      mana: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Tamara',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03P9014J23-a4222300ef1b-512',
      info: 'Восстанавливает по 2 хп героям',
      attack: 2,
      health: 2,
      mana: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lena',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JBK7R170-374842e32469-512',
      info: 'Battlecry: Устанавливает герою противника здоровье в 22.',
      attack: 7,
      health: 9,
      mana: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lexus',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JDR6GG3C-448dd2fd84bf-512',
      info: 'Charge',
      attack: 8,
      health: 9,
      mana: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Artem',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03K3L3SA1H-1926761efff5-512',
      info: '',
      attack: 11,
      health: 10,
      mana: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nadya',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LS11RHH7-b0ef5f527768-512',
      info: 'Divine Shield',
      attack: 9,
      health: 7,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yana S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PFN3GJK0-f49919eb18ca-512',
      info: 'Battlecry: Забирает карту из колоды',
      attack: 8,
      health: 8,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Anatolii',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PPAN3QDU-6948d24e8c67-512',
      info: 'Divine Shield',
      attack: 10,
      health: 9,
      mana: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Aleksandr S',
      imageString: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MJJC79S4-aab0d7298315-512',
      info: 'Divine Shield',
      attack: 1,
      health: 1,
      mana: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Jora',
      imageString: 'https://imageup.ru/img130/3990051/img_4147-1.jpg',
      info: 'Charge',
      attack: 9,
      health: 9,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Abdula',
      imageString: 'https://imageup.ru/img277/3990052/img_4284-1.jpg',
      info: 'Battlecry:Вызывает существо 4/4 на свою сторону',
      attack: 7,
      health: 7,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Alya',
      imageString: 'https://imageup.ru/img23/3990046/415fa72f-6e0f-4404-a268-4acf296917fd.jpeg',
      info: 'Divine Shield',
      attack: 7,
      health: 7,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nastuha',
      imageString: 'https://imageup.ru/img107/3990035/05cc446e-89e2-436a-aeab-325e6a650e35.jpeg',
      info: '',
      attack: 6,
      health: 10,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Georgii',
      imageString: 'https://avatars.githubusercontent.com/u/20651552?v=4',
      info: 'Boss',
      attack: 15,
      health: 15,
      mana: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Pahan',
      imageString: 'https://imageup.ru/img124/3990047/6a1841d6-f161-4965-946f-1610e316a726.jpeg',
      info: 'Taunt(есть,но не точно), Divine Shield',
      attack: 2,
      health: 14,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Makson',
      imageString: 'https://imageup.ru/img246/3990049/3707b41e-a6fe-455d-b5da-125e5d4de945.jpeg',
      info: 'Charge',
      attack: 8,
      health: 7,
      mana: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Pavel E',
      imageString: 'https://imageup.ru/img57/3990038/d43580b4-762d-478a-8576-325d5218e505.jpeg',
      info: '',
      attack: 5,
      health: 6,
      mana: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ionna',
      imageString: 'https://imageup.ru/img293/3990055/28b7a7f1-5954-43fa-bb52-3ca6e143bb53.jpeg',
      info: '',
      attack: 5,
      health: 12,
      mana: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Zhentos',
      imageString: 'https://imageup.ru/img34/3990050/efc670ff-08be-4aa9-a5f2-c06b13b263d9.jpeg',
      info: 'Battlecry: Наносит 8 урона герою противника, исцеляет тебя',
      attack: 6,
      health: 7,
      mana: 9,
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
