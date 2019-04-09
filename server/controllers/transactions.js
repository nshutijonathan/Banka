import express from 'express';
import transactions from '../models/transactions';

class Transactioncontrollers{
	static createTransactions(req,res){
		const data={
			id:transactions.length+1,
            createdOn:req.body.createdOn,
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
			message:"successfully added",
			data:id,accountNumber,amount,cashier,type,newBalance
		})
	}
	static getAlltransactions(req,res){
		return res.status(200).send({
			transactions
		})
	}
}
export default Transactioncontrollers;