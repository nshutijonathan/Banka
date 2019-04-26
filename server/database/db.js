import pool from './connect';
import bcrypt from 'bcrypt';
export const createTables = () => {
    const users = `CREATE TABLE IF NOT EXISTS
	users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) UNIQUE NOT NULL,
	firstname VARCHAR(25) NOT NULL, 
	lastname VARCHAR(25) NOT NULL,
	password VARCHAR(250) NOT NULL,
	type VARCHAR(10) NOT NULL,
	isadmin VARCHAR(35) NOT NULL
	)`;
    const accounts = `CREATE TABLE IF NOT EXISTS
	accounts(
    id SERIAL PRIMARY KEY,
    accountNumber VARCHAR(250) UNIQUE NOT NULL,
    createdOn VARCHAR(30) NOT NULL,
    owner SERIAL NOT NULL,
    type VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    balance INT  NOT NULL,
    FOREIGN KEY (owner) REFERENCES users(id) ON DELETE CASCADE

	)`;
    const transactions = `CREATE TABLE IF NOT EXISTS
	transactions(
    transactionid SERIAL PRIMARY KEY,
    createdOn VARCHAR(30) NOT NULL,
    type VARCHAR(20) NOT NULL,
    accountNumber INT NOT NULL,
    cashier VARCHAR(20) NOT NULL,
    amount INT NOT NULL,
    oldBalance INT NOT NULL,
    newBalance INT NOT NULL
	)`;
    const queries = `${users}; ${accounts}; ${transactions}`;
    pool.query(queries).then((res) => {
        console.log(res);
        pool.end();
    }).catch((err) => {
        console.log(err);
        pool.end();
    });
};
export const dropTables = () => {
    const users = 'DROP TABLE IF EXISTS users';
    const accounts = 'DROP TABLE IF EXISTS accounts';
    const transactions = 'DROP TABLE IF EXISTS transactions'
    pool.query(users);
    pool.query(accounts);
    pool.query(transactions).then((res) => {
        console.log(res);
        pool.end();
    }).catch((err) => {
        console.log(err);
        pool.end();
    });
    pool.on('remove', () => {
        console.log('client removed');
        process.exit(0);
    });
};
export const indexadmin = () => {
    const hash=bcrypt.hashSync('nshuti12345',8);
    const admin = `INSERT INTO users(email,firstName, lastName,password, type, isadmin)
	VALUES ('nshuti@gmail.com','nshuti','jonathan','`+hash+`','admin','true') ON CONFLICT DO NOTHING returning *`;
    pool.query(admin).then((res) => {
        console.log(res);
        pool.end();
    }).catch((err) => {
        console.log(err);
        pool.end();
    });
};
export const indexstaff = () => {
    const hash=bcrypt.hashSync('staff12345',8);
    const staff = `INSERT INTO users(email,firstName, lastName,password, type, isadmin)
    VALUES ('staff@gmail.com','nshuti','jonathan','`+hash+`','staff','true') ON CONFLICT DO NOTHING returning *`;
    pool.query(staff).then((res) => {
        console.log(res);
        pool.end();
    }).catch((err) => {
        console.log(err);
        pool.end();
    });
};

require('make-runnable');