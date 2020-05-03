'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeadSchema extends Schema {
  up() {
    this.create('leads', (table) => {
      table.increments()
      table.integer('id_agent').references('id').inTable('people')
      table.string('name', 120)
      table.string('email', 60)
      table.string('phone_contact', 20)
      table.timestamps()
    })
  }

  down() {
    this.drop('leads')
  }
}

module.exports = LeadSchema
