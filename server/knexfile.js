// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit'
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/reddit',
    pool: {
      min: 2,
      max: 10
    }
  }

};
