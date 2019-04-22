import pool from '../database/connect';
import jwt from 'jsonwebtoken';
import validateUser from '../helpers/validations';
import {usershelpers} from '../middlewares/users';
const User={
	 async create(req, res) {
	 	const hashpassword=usershelpers.hashPassword(req.body.password);
	 	const createQuery=`INSERT INTO 
users(email,firstname,lastname,password,type,isadmin)
VALUES($1,$2,$3,$4,$5,$6)returning *`;

const values=[
req.body.email,
req.body.firstName,
req.body.lastName,
hashpassword,
req.body.type,
req.body.isAdmin
];
let email=req.body.email;
let firstname=req.body.firstName;
let lastname=req.body.lastName;
let password=hashpassword;
let type=req.body.type;
let isadmin=req.body.isAdmin;
try{
	if(validateUser.validatesignup(req,res)){
	const {rows}=await pool.query(createQuery,values);
	jwt.sign({values},'secretkey',(err,token)=>{
		return res.status(201).send({
			status:201,
			token,
			user:{email,firstname,lastname,password,type,isadmin}

		})
	})
}
}
catch(error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(401).send({
           status: 401,
          'error': 'User with that EMAIL already exist'
        })
      }
      if (error) {
      	return res.status(401).send({
      		error:error.message
      	})
      }
  
      	
}
},
async login(req, res) {
	try {
    if (!req.body.email || !req.body.password) {
      return res.status(401).send({
         status: 401,
        'error': 'Some values are missing'
      });
    }
    if (validateUser.validatesignin(req,res)) {
    const text = 'SELECT * FROM users WHERE email = $1';
    const values=[
    req.body.email,
    req.body.password
    ];
    const { rows } = await pool.query(text,[req.body.email]);

      if (!rows[0]) {
        return res.status(401).send({
           status: 401,
          'error': 'INVALID email or password'
        });
      }
      if(!usershelpers.comparePassword(rows[0].password, req.body.password)) {
        return res.status(401).send({
           status: 401,
          'error': 'INVALID email or password'
        });
      }
      else{
      	jwt.sign({values},'secretkey',(err,token)=>{
		return res.status(201).send({
			status:201,
			token,
			message:"Successfully Logged in"

		})
	})
      }
      
    } 
}
    catch(error) {
      return res.status(400).send({message:error.message})
    }
},
async getall(req,res){
	try{
		const text='SELECT * FROM users';
	    const {rows}=await pool.query(text);
	    return res.status(200).send({
          status: 200,
          message:"Users retrieved Successfully",
          rows
      });
	}
	catch(error) {
      return res.status(400).send({message:error.message})
    }
	
},
async getone(req,res){
	const user_id=req.params.id;
	try {
		const {
        rows
      } = await pool.query('SELECT * FROM users WHERE id = $1', [user_id]);
      if (rows.length > 0) {
        return res.status(200).json({
          status: 200,
          data: rows[0],
        });
    }

      else {return res.json({
        status: 204,
        error:`user with id ${req.params.id} not found..`
      });
  }
}
	catch(error){
		return res.status(401).send({message:error.message})
	}

}
}
export default User




