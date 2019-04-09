import express from 'express';
import bank_accounts  from '../models/create_bank_accounts';

class BankAccountscontrollers{
	static createAccount(req,res){
		const data={
			accountNumber:req.body.accountNumber,
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			email:req.body.email,
			type:req.body.type,
			openingBalance:req.body.openingBalance

		}
		bank_accounts.push(data);
		return res.status(201).send({
			message:"successfully created",
			data
		})


	}
	static getbankAccounts(req,res){
		return res.status(200).send({
			bank_accounts 
		})

	}
}
export default BankAccountscontrollers;