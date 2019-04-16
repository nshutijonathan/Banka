import express from 'express';
import bank_accounts  from '../models/create_bank_accounts';
import validateaccounts from '../helpers/accounts_validations.js';
import users_db from '../models/users';
const users=users_db;
const Accounts=bank_accounts;
let date=new Date();
class BankAccountscontrollers{
	static createAccount(req,res){
    try{
      if (validateaccounts.accounts_creation(req,res)) {
		const data={
      id:Accounts.length+1,
			accountNumber:req.body.accountNumber,
      createdOn:date,
      owner:req.body.owner,
			type:req.body.type,
      status:req.body.status,
			openingBalance:req.body.openingBalance,

		}
    let check=users.filter(user=>user.id==req.body.owner);
    let ownerId=req.body.owner;
    if(check==false){
      return res.status(404).send({error:`user  with id ${ownerId} not found`
        
      })
    }
    let user_accountN=req.body.accountNumber;
    let check_account=bank_accounts.filter(accountN=>accountN.accountNumber==req.body.accountNumber);
    if (check_account.length===1) {
      return res.status(404).send({error:`account  with number ${user_accountN} already exists`
        
      })
    }
    Accounts.push(data);
    let AccountNumber=data.accountNumber;
    let firstName=check[0].firstName;
    let lastName=check[0].lastName;
    let email=check[0].email;
    let type=data.type;
    let openingBalance=data.openingBalance;
		return res.status(201).send({
			message:" account successfully created",
			AccountNumber,firstName,lastName,email,type,openingBalance
		})
}
}
catch(error){
  console.log(error);
    return res.status(400).send({
      message:error.message
    })
   }


	}
	static getbankAccounts(req,res){
		return res.status(200).send({
			status:200,
      message:"Successfully retrieved",
      Accounts
		})

	}
static deactivateAccounts(req,res){
    const accId = req.body.accountNumber;
  const userIndex = Accounts.find(user => user.accountNumber === parseInt(accId, 10));
  if(!userIndex){
    return res.status(404).send({error:`accounts  with id ${accId} not found`});
  }
  userIndex.accountNumber=req.body.accountNumber;
  userIndex.owner=req.body.owner;
  userIndex.type=req.body.type;
  userIndex.status=req.body.status;
  userIndex.openingBalance=req.body.openingBalance;
  const accountNumber=req.body.accountNumber
  const status=req.body.status;
  return res.status(200).send({
    message:"Successfully updated",
    accountNumber,status

  });
   };
   static deleteAccounts(req,res){
   	const accountId = req.params.accountNumber;
   	const accountIndex = Accounts.find(check => check.accountNumber === parseInt(accountId, 10));
   	if(!accountIndex){
   		return res.status(404).send({status:404,error:`Account  with id ${accountId} not found`});
   	}
   	const index=Accounts.indexOf(accountIndex);
   	Accounts.splice(index,1);
   	return res.status(200).send({message:`User with id ${accountId} Successfully deleted!`});

   }
}
export default BankAccountscontrollers;