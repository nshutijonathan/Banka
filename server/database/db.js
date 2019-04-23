import pool from './connect';

export const createTables=()=>{
	const users=`CREATE TABLE IF NOT EXISTS
	users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) UNIQUE NOT NULL,
	firstname VARCHAR(25) NOT NULL, 
	lastname VARCHAR(25) NOT NULL,
	password VARCHAR(250) NOT NULL,
	type VARCHAR(10) NOT NULL,
	isadmin VARCHAR(35) NOT NULL
	)`;
	const accounts=`CREATE TABLE IF NOT EXISTS
	accounts(
    id SERIAL PRIMARY KEY,
    accountNumber FLOAT UNIQUE NOT NULL,
    createdOn VARCHAR(30) NOT NULL,
    owner SERIAL NOT NULL,
    type VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    balance INT  NOT NULL,
    FOREIGN KEY (owner) REFERENCES users(id) ON DELETE CASCADE

	)`;
	const transactions=`CREATE TABLE IF NOT EXISTS
	transactions(
    id SERIAL PRIMARY KEY,
    createdOn VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    accountNumber INT NOT NULL,
    cashier VARCHAR(20) NOT NULL,
    amount INT NOT NULL,
    oldBalance INT NOT NULL,
    newBalance INT NOT NULL
	)`;
	const queries=`${users}; ${accounts}; ${transactions}`;
    pool.query(queries)
    .then((res)=>{
    	console.log(res);
    	pool.end();
    })
    .catch((err)=>{
    	console.log(err);
    	pool.end();
    });

};
export const dropTables=()=>{
	const users='DROP TABLE IF EXISTS users';
	const accounts='DROP TABLE IF EXISTS accounts';
	const transactions='DROP TABLE IF EXISTS transactions'
	pool.query(users);
	pool.query(accounts);
	pool.query(transactions)
	.then((res)=>{
		console.log(res);
		pool.end();
	})
	.catch((err)=>{
		console.log(err);
		pool.end();
	});
	pool.on('remove',()=>{
		console.log('client removed');
		process.exit(0);

	});
};
require('make-runnable');
