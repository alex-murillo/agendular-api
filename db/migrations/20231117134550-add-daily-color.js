'use strict';

const { DAILY_TABLE, DailySchema } = require('./../models/daily.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(DAILY_TABLE, 'color', DailySchema.color)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(DAILY_TABLE, 'color')
  }
};
