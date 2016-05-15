
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({user_id:1, post_id:1, description:'Here is a comment by the user with an id of 1.'}),
    knex('comments').insert({user_id:1, post_id:2, description:'Here is a comment by the user with an id of 1.'}),
    knex('comments').insert({user_id:1, post_id:3, description:'Here is a comment by the user with an id of 1.'}),
    knex('comments').insert({user_id:2, post_id:1, description:'Here is a comment by the user with an id of 2'}),
    knex('comments').insert({user_id:2, post_id:2, description:'Here is a comment by the user with an id of 2'}),
    knex('comments').insert({user_id:2, post_id:3, description:'Here is a comment by the user with an id of 2'}),
    knex('comments').insert({user_id:3, post_id:1, description:'Here is a comment by the user with an id of 3'}),
    knex('comments').insert({user_id:3, post_id:2, description:'Here is a comment by the user with an id of 3'}),
    knex('comments').insert({user_id:3, post_id:3, description:'Here is a comment by the user with an id of 3'})
  );
};
