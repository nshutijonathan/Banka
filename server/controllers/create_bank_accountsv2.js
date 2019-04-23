import pool from '../database/connect';
import jwt from 'jsonwebtoken';
import  validateaccounts from '../helpers/accounts_validations';
let date=new Date();
const accounts={
	async createaccounts(req,res){
		const createQuery=`INSERT INTO 
accounts(accountNumber,createdOn,owner,type,status,balance)
VALUES($1,$2,$3,$4,$5,$6)returning *`;
const owner_id=req.user.id;
const query_owner=`SELECT firstname,lastname,email FROM users WHERE id=$1`;
const values=[
req.body.accountNumber,
date,
req.body.owner,
req.body.type,
req.body.status,
req.body.openingBalance
];
let accountNumber=req.body.accountNumber;
let type=req.body.type;
let balance=req.body.openingBalance

let owner = {};
try{
	const { rows } = await pool.query(query_owner,[owner_id]);
    owner=rows[0];
}
catch(error){
        return res.status(401).send({
           error
        })
      }

try{

	if (validateaccounts.accounts_creation(req,res)) {
		const {rows}=await pool.query(createQuery,values);
		return res.status(201).send({
			status:201,
			message:"account successfully created",
			accountNumber,
			type,
            firstname: owner.firstname,
            lastname: owner.firstname,
            email:owner.email
		
		});
	}

	}
	catch(error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(401).send({
           status: 401,
          'error': 'this account number already exist'
        })
      }
      if (error) {
      	console.log(error)
      	return res.status(401).send({
      		message:error.message
      	})
      }
  
      	
}

}
}
export default accounts;