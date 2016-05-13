
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'James'}),
    knex('users').insert({username: 'Sasha'}),
    knex('users').insert({username: 'Cookie'})
  );
};
