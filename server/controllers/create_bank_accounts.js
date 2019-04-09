import express from 'express';
import bank_accounts  from '../models/create_bank_accounts';

class BankAccountscontrollers{
	static createAccount(req,res){
		const data={
			accountNumber:bank_accounts.length+1,
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			email:req.body.email,
			type:req.body.type,
			openingBalance:req.body.openingBalance,
			status:req.body.status

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
	static deactivateAccounts(req,res){
   	const accountId = req.params.accountNumber;
    const accountIndex = bank_accounts.find(check => check.accountNumber === parseInt(accountId, 10));
  if(!accountIndex){
  	return res.status(404).send({error:`Account  with id ${accountId} not found`});
  }
  accountIndex.firstName=req.body.firstName;
  accountIndex.lastName=req.body.lastName;
  accountIndex.email=req.body.email;
  accountIndex.type=req.body.type;
  accountIndex.openingBalance=req.body.openingBalance;
  accountIndex.status=req.body.status;
  return res.status(200).send({
    message:"Successfully updated",
    data:accountIndex
  });
   };
   static deleteAccounts(req,res){
   	const accountId = req.params.accountNumber;
   	const accountIndex = bank_accounts.find(check => check.accountNumber === parseInt(accountId, 10));
   	if(!accountIndex){
   		return res.status(404).send({error:`Account  with id ${accountId} not found`});
   	}
   	const index=bank_accounts.indexOf(accountIndex);
   	bank_accounts.splice(index,1);
   	return res.status(200).send({message:`User with id ${accountId} Successfully deleted!`});

   }
}
export default BankAccountscontrollers;