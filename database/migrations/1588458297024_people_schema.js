'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeopleSchema extends Schema {
  up() {
    this.table('people', (table) => {
      table.boolean('user_pro').defaultTo(false)
      table.integer('id_agency').references('id').inTable('agency');
      table.string('kind_professional', 180)
      table.string('background', 255)
      table.string('bio', 120)
      table.text('description', 'mediumtext')
      table.string('specialization', 255)
      table.string('email', 120)
      table.string('password', 180)
    })
  }

  down() {
    this.table('people', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PeopleSchema
