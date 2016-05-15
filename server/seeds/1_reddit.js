
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({username: 'James', email: 'freeman.james.h@gmail.com', password:'password1'}),
    knex('users').insert({username: 'Sasha', email: 'adunbar@coa.edu', password:'password2'}),
    knex('users').insert({username: 'Cookie', email: 'cookie@vancleef.org', password:'password3'})
  );
};
