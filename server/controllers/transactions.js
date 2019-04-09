import express from 'express';
import transactions from '../models/transactions';
import users_db from '../models/users';
import bank_accounts  from '../models/create_bank_accounts';
let date=new Date();
class Transactioncontrollers{
	static createTransactions(req,res){
		const accId = req.body.accountNumber;

		const data={
			id:transactions.length+1,
            createdOn:date,
            type:req.body.type,
            accountNumber:req.body.accountNumber,
            cashier:req.body.cashier,
			amount:req.body.amount,
			oldBalance:req.body.oldBalance,
			newBalance:req.body.newBalance
		}
		transactions.push(data);
		let id=data.id;
		let accountNumber=data.accountNumber;
		let amount=data.amount;
		let cashier=data.cashier;
		let type=data.type;
		let newBalance=data.newBalance;
		return res.status(201).send({
			message:"user successfully debited",
			id,accountNumber,amount,cashier,type,newBalance
		})
	}
	static getAlltransactions(req,res){
		return res.status(200).send({
			transactions
		})
	}
}
export default Transactioncontrollers;