'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeopleSchema extends Schema {
  up() {
    this.create('people', (table) => {
      table.increments()
      table.boolean('active').defaultTo(false)
      table.string('profile_picture', 120)
      table.string('cover_picture', 120)
      table.string('name', 120).notNullable()
      table.string('cpf', 15).notNullable()
      table.string('rg', 25).notNullable()
      table.string('andress', 180).notNullable()
      table.string('neighborhood', 120).notNullable()
      table.string('city', 120).notNullable()
      table.string('state', 2).notNullable()
      table.string('phone', 16)
      table.string('celphone', 18)
      table.string('linkedin', 60)
      table.string('facebook', 60)
      table.string('instagram', 60)
      table.timestamps()
    })
  }

  down() {
    this.drop('people')
  }
}

module.exports = PeopleSchema
