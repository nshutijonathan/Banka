import express from 'express';
import transactions from '../models/transactions';
import users_db from '../models/users';
import bank_accounts from '../models/create_bank_accounts';
let date=new Date();
//transactions class
class Transactioncontrollers{
	static createTransactions(req,res){
		const accId = req.params.accountNumber;
        const check=bank_accounts.filter(account => account.accountNumber== accId);
        if(check==false){
        	return res.status(400).send({
        		message:"accountNumber is not in  the system"
        	})
        }
        if(bank_accounts[0].status==="deactivated"){
        	return res.status(400).send({
        		message:"accountNumber is not activated!"
        	});
        }
        else{
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
	}
	static getAlltransactions(req,res){
		return res.status(200).send({
			status:200,
			success:true,
			message:"transactions retrieved successfully",
			transactions
		})
	}
	static createTransactionscredit(req,res){
		const accId = req.params.accountNumber;
        const check=bank_accounts.filter(account => account.accountNumber== accId);
        if(check==false){
        	return res.status(400).send({
        		message:"accountNumber is not in  the system"
        	})
        }
        if(bank_accounts[0].status==="deactivated"){
        	return res.status(400).send({
        		message:"accountNumber is not activated!"
        	});
        }
        else{
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
			status:201,
			message:"user successfully credited",
			id,accountNumber,amount,cashier,type,newBalance
		})
	}


	}
}
export default Transactioncontrollers;