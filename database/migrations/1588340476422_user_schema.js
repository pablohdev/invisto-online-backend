'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.table('users', (table) => {
      // alter table
      table.integer('people_id').unsigned().references('id').inTable('people')
    })
  }

  down() {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('people_id')
    })
  }
}

module.exports = UserSchema
