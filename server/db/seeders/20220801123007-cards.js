module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Polyasha',
        photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HZ9YKYQM-f48939db467d-512',
        description: '123',
        damage: 3,
        health: 2,
        manaCost: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Polina',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HVD5B086-cf4ff759fef7-512',
      description: '123',
      damage: 2,
      health: 3,
      manaCost: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Adam',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LY2XGBGE-56b80e6a8e74-512',
      description: '123',
      damage: 4,
      health: 5,
      manaCost: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Sasha',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03K3JVE988-4fb3cd786a1a-512',
      description: '123',
      damage: 6,
      health: 7,
      manaCost: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Artem',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HQMR0S07-039523666e5c-512',
      description: '123',
      damage: 2,
      health: 2,
      manaCost: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Anya',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MFMM56FJ-5cfebfdbfd43-512',
      description: '123',
      damage: 5,
      health: 5,
      manaCost: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Damir',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JAUBQLA1-f0a832383b6d-512',
      description: '123',
      damage: 9,
      health: 5,
      manaCost: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lena',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J37X5HHB-0361cf6ea93f-512',
      description: '123',
      damage: 3,
      health: 3,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kiril',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JEBVTG1H-3dc19c056464-512',
      description: '123',
      damage: 2,
      health: 4,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Leila',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JJQKB1GR-58763725019a-512',
      description: '123',
      damage: 2,
      health: 1,
      manaCost: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kadj',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J3CX6XHU-f14b29716e74-512',
      description: '123',
      damage: 1,
      health: 2,
      manaCost: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Maksimilian',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J5TGFF0D-07c995e0f9f3-512',
      description: '123',
      damage: 6,
      health: 5,
      manaCost: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Bublitos',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HVP5Q207-57b4ec11c38b-512',
      description: '123',
      damage: 5,
      health: 1,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yura',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J34GTK53-911def767cdf-512',
      description: '123',
      damage: 1,
      health: 2,
      manaCost: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ulyana',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JCGPJH2Q-0bf567dd1de1-512',
      description: '123',
      damage: 2,
      health: 7,
      manaCost: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yurec',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JSHCUAL9-9e5e7fb1db94-512',
      description: '123',
      damage: 6,
      health: 2,
      manaCost: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vadim',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03Q45GLBFS-dee6c2dc4b00-512',
      description: '123',
      damage: 3,
      health: 5,
      manaCost: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vadim Z',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PAAJQ69K-4137f4294b84-512',
      description: '123',
      damage: 1,
      health: 1,
      manaCost: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vika Zh',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PAQ0U8DT-9e285827a747-512',
      description: '123',
      damage: 1,
      health: 4,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vika S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LS676V53-cbe83707462e-512',
      description: '123',
      damage: 3,
      health: 5,
      manaCost: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Vladimir',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03P34HBE07-fb6e305194af-512',
      description: '123',
      damage: 7,
      health: 7,
      manaCost: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Danil',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUUQD03D-2eb4e2e863bb-512',
      description: '123',
      damage: 4,
      health: 1,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Denis O',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PKV9PGMB-ea9bcde376f5-512',
      description: '123',
      damage: 5,
      health: 5,
      manaCost: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Katya E',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LVH17Q1H-b66bf1b87c35-512',
      description: '123',
      damage: 4,
      health: 5,
      manaCost: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Elena K',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PG7T3VSA-12d76352dda5-512',
      description: '123',
      damage: 4,
      health: 3,
      manaCost: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Igoryan',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HUN523PG-de7d73fa0581-512',
      description: '123',
      damage: 10,
      health: 9,
      manaCost: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Igor S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M9KQ3604-a1967ec1c61b-512',
      description: '123',
      damage: 3,
      health: 6,
      manaCost: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'ILya M',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03ME2GKZLZ-0621e197e6db-512',
      description: '123',
      damage: 4,
      health: 12,
      manaCost: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'ILya P',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MK4SUS6M-a439a57a95d4-512',
      description: '123',
      damage: 6,
      health: 7,
      manaCost: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kiruha',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PT0WR3H7-2b43c9386e57-512',
      description: '123',
      damage: 8,
      health: 6,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Kristina S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUNZ7J2X-b058b4b39db4-512',
      description: '123',
      damage: 6,
      health: 8,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lidiya L',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LRUMU9TP-20d58008904b-512',
      description: '123',
      damage: 7,
      health: 7,
      manaCost: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lubov',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M66SL76H-a3e7653c400e-512',
      description: '123',
      damage: 5,
      health: 7,
      manaCost: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Aleksandra',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M0G8NXF0-6b719a60b187-512',
      description: '123',
      damage: 4,
      health: 8,
      manaCost: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Maksim P',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03M66SL76H-a3e7653c400e-512',
      description: '123',
      damage: 2,
      health: 3,
      manaCost: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Mariya E',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MK13SZ9N-e29282d28643-512',
      description: '123',
      damage: 4,
      health: 1,
      manaCost: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nikita K',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03J2JLQ259-b194a5a60889-512',
      description: '123',
      damage: 7,
      health: 1,
      manaCost: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nikitos',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HV4XL32A-36d7d5744884-512',
      description: '123',
      damage: 2,
      health: 7,
      manaCost: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Pasha',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MZMU469E-b7a300507cc7-512',
      description: '123',
      damage: 4,
      health: 6,
      manaCost: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Pasha S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JUHU5BQQ-1e288bef279a-512',
      description: '123',
      damage: 2,
      health: 4,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Andrei N',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03NZ583R7H-fb6eec9927bd-512',
      description: '123',
      damage: 3,
      health: 3,
      manaCost: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Sergei S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03ML7EGEDN-8583b8e46402-512',
      description: '123',
      damage: 2,
      health: 1,
      manaCost: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Tamara',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03P9014J23-a4222300ef1b-512',
      description: '123',
      damage: 1,
      health: 2,
      manaCost: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lena',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JBK7R170-374842e32469-512',
      description: '123',
      damage: 8,
      health: 9,
      manaCost: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Lexus',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03JDR6GG3C-448dd2fd84bf-512',
      description: '123',
      damage: 9,
      health: 8,
      manaCost: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ilona',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03HY26V0MR-aba6ecbfa6b0-512',
      description: '123',
      damage: 10,
      health: 6,
      manaCost: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Nadya',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LS11RHH7-b0ef5f527768-512',
      description: '123',
      damage: 6,
      health: 8,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Yana S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PFN3GJK0-f49919eb18ca-512',
      description: '123',
      damage: 8,
      health: 5,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Anatolii',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03PPAN3QDU-6948d24e8c67-512',
      description: '123',
      damage: 9,
      health: 10,
      manaCost: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Aleksandr S',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MJJC79S4-aab0d7298315-512',
      description: '123',
      damage: 10,
      health: 7,
      manaCost: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Jora',
      photo_url: 'https://drive.google.com/file/d/1Kh3VCJQ6g2M6z1DBFSMu52ljfLO271TT/view?usp=sharing',
      description: '123',
      damage: 10,
      health: 10,
      manaCost: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Abdula',
      photo_url: 'https://drive.google.com/file/d/1W9Zve-9lqqr_nf0IZ-mYKm7BQigOOm8q/view?usp=sharing',
      description: '123',
      damage: 9,
      health: 9,
      manaCost: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Alya',
      photo_url: 'https://drive.google.com/file/d/1cUNWmWJI9eXRQHTGs-yFxpj-ImuJYJ-d/view?usp=sharing',
      description: '123',
      damage: 8,
      health: 7,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ali',
      photo_url: 'https://avatars.githubusercontent.com/u/71690649?v=4',
      description: '123',
      damage: 7,
      health: 8,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Jora B',
      photo_url: 'https://avatars.githubusercontent.com/u/20651552?v=4',
      description: '123',
      damage: 10,
      health: 11,
      manaCost: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Aleksandr D',
      photo_url: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUTF4MNJ-9a2ed2081b6e-512',
      description: '123',
      damage: 7,
      health: 9,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Anton M',
      photo_url: 'https://avatars.githubusercontent.com/u/37448691?v=4',
      description: '123',
      damage: 7,
      health: 7,
      manaCost: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Pavel E',
      photo_url: 'blob:https://web.telegram.org/fd85960f-64bd-4832-aabb-8901d19d2e0e',
      description: '123',
      damage: 6,
      health: 10,
      manaCost: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Ionna',
      photo_url: 'blob:https://web.telegram.org/245d468c-8594-4ed4-b821-b9517430b633',
      description: '123',
      damage: 8,
      health: 8,
      manaCost: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('Cards', [{
      name: 'Dimon',
      photo_url: 'blob:https://web.telegram.org/d0c3b553-ad3a-4181-ad11-663b3d1f54fa',
      description: '123',
      damage: 9,
      health: 7,
      manaCost: 9,
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
