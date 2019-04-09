import express from 'express';
import bank_accounts  from '../models/create_bank_accounts';
import users_db from '../models/users';
const users=users_db;
const Accounts=bank_accounts;
let date=new Date();
class BankAccountscontrollers{
	static createAccount(req,res){
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
      return res.status(404).send({error:`Account  with id ${ownerId} not found`
        
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
	static getbankAccounts(req,res){
		return res.status(200).send({
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
   		return res.status(404).send({error:`Account  with id ${accountId} not found`});
   	}
   	const index=Accounts.indexOf(accountIndex);
   	Accounts.splice(index,1);
   	return res.status(200).send({message:`User with id ${accountId} Successfully deleted!`});

   }
}
export default BankAccountscontrollers;