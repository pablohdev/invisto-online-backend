'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeopleSchema extends Schema {
  up() {
    this.table('people', (table) => {
      // alter table
      table.timestamp('created_at').defaultTo(this.fn.now()).alter()
      table.timestamp('updated_at').defaultTo(this.fn.now()).alter()
    })
  }

  down() {
    this.table('people', (table) => {
      // reverse alternations
      table.timestamp('created_at').alter()
      table.timestamp('updated_at').alter()
    })
  }
}

module.exports = PeopleSchema
