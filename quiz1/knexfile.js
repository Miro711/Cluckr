module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knexpress_quiz',
      username: 'amir',
      password: 'pepsiman'
    },
    migrations: {
			tableName: 'migrations',
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds',
		},
  },
};