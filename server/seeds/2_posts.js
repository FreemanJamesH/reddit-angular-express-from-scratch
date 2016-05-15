
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({title: 'Post One', user_id:1, image_src:'http://cliparwolf.com/images/1/1-07.jpg', description:'Here is a post about the number one.'}),
    knex('posts').insert({title: 'Post Two', user_id:2, image_src:'http://digimind.com/blog/wp-content/uploads/2012/02/number2c.png', description:'Here is a post about the number two.'}),
    knex('posts').insert({title: 'Post Three', user_id:3, image_src:'http://static1.squarespace.com/static/52ed3dbbe4b0d57316b73056/t/53e97675e4b0dc385b1d48a1/1407809158513', description:'Here is a post about the number three.'})
  );
};
