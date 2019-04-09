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
	static deactivateAccounts(){
		const accountid = req.params.accountNumber;
		const accountIndex = bank_accounts.find(check=> check.id === parseInt(accountid, 10));
		if(!accountIndex){
			return res.status(404).send({error:`Acoount  with number  ${accountid } not found`});
		}
		accountIndex.accountNumber=req.body.accountNumber;
		accountIndex.firstName=req.body.firstName;
		accountIndex.lastName=req.body.lastName;
		accountIndex.email=req.body.email;
		accountIndex.type=req.body.type;
		accountIndex.openingBalance=req.body.openingBalance;
		return res.status(200).send({
			message:"successfully updated",
			accountIndex
		})
	}
}
export default BankAccountscontrollers;