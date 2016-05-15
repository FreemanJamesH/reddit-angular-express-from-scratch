
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE').onUpdate('CASCADE');
    table.string('description');
    table.timestamp('date').defaultTo(knex.raw('now()'));
    table.integer('votes').defaultTo(1)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
