import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users_db from '../models/users';
import validateUser from "../helpers/validations";

const allusers=users_db;

class Userscontrollers{
	static getAllusers(req,res){
		return res.status(200).send({
		status:200,
		message:"All users retrieved Successfully!",
		users_db
	});
	}

   static Usersignup(req,res){
    try{
      if(validateUser.validatesignup(req,res)){
        const users=allusers.filter(user=>user.email==req.body.email);
        if(users.length===1){
          return res.status(409).send({
            message:"this email already exists"
          })
        }

      }

   	const data={
    id:users_db.length + 1,
    email:req.body.email,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    password:req.body.password,
    type:req.body.type,
    isAdmin:req.body.isAdmin

  }
  
	users_db.push(data);
  const users = allusers.filter(user => user.email == req.body.email);
  jwt.sign({data},'secretkey',(err,token)=>{
    return res.status(201).send({
    status:201,token,data
  })

  })
	}
  catch(error){
    return res.status(400).send({
      message:error.message
    })
   }
 }
 static Usersignin(req,res){
  try{
    if(validateUser.validatesignin(req,res)){
      const oneuser={
        email: req.body.email,
        password:req.body.password
      }
      const checkmail=allusers.filter(user=>user.email==oneuser.email);
      if(checkmail==false){
        return res.status(401).send({
          message: "Incorrect email or password"
        })
      }
      const checkpswd=allusers.filter(user=>user.password==oneuser.password);
      if(checkpswd==false){
        return res.status(401).send({
          message:"Incorrect email or password"
        })
      }
      else{
        const checkmail=allusers.filter(user=>user.email==oneuser.email);
        let id=checkmail[0].id;
        let firstName=checkmail[0].firstName;
        let lastName=checkmail[0].lastName;
        let email=checkmail[0].email;
       jwt.sign({oneuser},'secretkey',(err,token)=>{
          return res.status(200).send({
             token,message:"Successfully logged in",id,firstName,lastName,email
             })


      })

    }
  }

 }
 catch(error){
    return res.status(400).send({
      message:error.message
    })
   }

}



   static getOneuser(req,res){
   		const selectedUser = users_db.find(user => user.id === parseInt(req.params.id, 10));
  if (selectedUser) {
    return res.status(200).send({
      status: 200,
      data: [selectedUser]
    });
  }
  return res.status(404).send({
    status: 404,
    error: `The user with the id ${req.params.id} was not found`
  });
   }
   static deleteUser(req,res){
   	const userId = req.params.id;
  const userIndex = users_db.find(user => user.id === parseInt(userId, 10));
  if(!userIndex){
  	return res.status(404).send({error:`User with id ${userId} not found`});
  }
  const index=users_db.indexOf(userIndex);
  users_db.splice(index,1);
  return res.status(200).send({message:`User with id ${userId} Successfully deleted!`});
   }
   static updateUser(req,res){
   	const userId = req.params.id;
  const userIndex = users_db.find(user => user.id === parseInt(userId, 10));
  if(!userIndex){
  	return res.status(404).send({status:404,error:`User with id ${userId} not found`});
  }
  userIndex.email=req.body.email;
  userIndex.firstName=req.body.firstName;
  userIndex.lastName=req.body.lastName;
  userIndex.password=req.body.password;
  userIndex.type=req.body.type;
  userIndex.isAdmin=req.body.isAdmin;
  return res.status(200).send({
    status:200,
    message:"Successfully updated",
    data:userIndex
  });
   };
}
export default Userscontrollers;


