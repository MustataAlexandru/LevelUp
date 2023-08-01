// const { Pool } = require('pg');

// const context = new Pool({
// 	user: 'postgres',
// 	password: '7139852465',
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'db',
// });


// module.exports = {
// 	query: (text, params) => context.query(text, params),
// };


const { Pool } = require('pg');

const context = new Pool({
	user: 'doadmin',
	password: 'AVNS_mYpXaAH73810lEN7NP1',
	host: 'db-postgresql-fra1-26753-do-user-13809431-0.b.db.ondigitalocean.com',
	port: 25060,
	database: 'db',
	ssl: {
		rejectUnauthorized: false, 
	},
});


module.exports = {
	query: (text, params) => context.query(text, params),
}