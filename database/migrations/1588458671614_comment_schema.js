'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up() {
    this.create('comments', (table) => {
      table.increments()
      table.integer('id_agent').references('id').inTable('people')
      table.integer('id_user').references('id').inTable('people')
      table.string('comment', 255)
      table.timestamps()
    })
  }

  down() {
    this.drop('comments')
  }
}

module.exports = CommentSchema
