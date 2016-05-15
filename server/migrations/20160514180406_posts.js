
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('title');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    table.string('image_src')
    table.string('description')
    table.timestamp('date').defaultTo(knex.raw('now()'));
    table.integer('votes').defaultTo(1)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
