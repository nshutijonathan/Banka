import express from 'express';
import bank_accounts  from '../models/create_bank_accounts';
import users_db from '../models/users';
const users=users_db;
class BankAccountscontrollers{
	static createAccount(req,res){
		const data={
      id:bank_accounts.length+1,
			accountNumber:req.body.accountNumber,
      createdOn:req.body.createdOn,
      owner:req.body.owner,
			type:req.body.type,
      status:req.body.status,
			openingBalance:req.body.openingBalance,

		}
    let check=users.filter(user=>user.id==req.body.owner);
    if(check==false){
      return res.status(404).send({
        message:"owner with provided id not found "
      })
    }
    bank_accounts.push(data);
    let AccountNumber=data.accountNumber;
    let firstName=check[0].firstName;
    let lastName=check[0].firstName;
    let email=check[0].email;
    let type=data.type;
    let openingBalance=data.openingBalance;
		return res.status(201).send({
			message:"successfully created",
			AccountNumber,firstName,lastName,email,type,openingBalance
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