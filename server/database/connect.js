import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

let connString = process.env.DATABASE_URL;

if(process.env.NODE_ENV === 'testing') {
	connString = process.env.TEST_DATABASE;
}
const pool = new pg.Pool({
    connectionString: connString,
});


pool.on('connect', () => {
    console.log('connected to the database');
});
export default pool;