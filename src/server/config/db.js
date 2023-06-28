const { Pool } = require('pg');

const context = new Pool({
	user: 'doadmin',
	password: 'AVNS_mYpXaAH73810lEN7NP1',
	host: 'db-postgresql-fra1-26753-do-user-13809431-0.b.db.ondigitalocean.com',
	port: 25060,
	database: 'defaultdb',
	ssl: {
		rejectUnauthorized: false, 
	},
});


module.exports = {
	query: (text, params) => context.query(text, params),
};
