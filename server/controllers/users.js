import express from 'express';
import users_db from '../models/users';

class Userscontrollers{
	static getAllusers(req,res){
		return res.status(200).send({
		'status':200,
		'message':"All users retrieved Successfully!",
		users_db
	});
	}

   static Usersignup(req,res){
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
	return res.status(201).send({
		data

	});

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
  	return res.status(404).send({error:`User with id ${userId} not found`});
  }
  userIndex.email=req.body.email;
  userIndex.firstName=req.body.firstName;
  userIndex.lastName=req.body.lastName;
  userIndex.password=req.body.password;
  userIndex.type=req.body.type;
  userIndex.isAdmin=req.body.isAdmin;
  return res.status(200).send(userIndex);
   };
}
export default Userscontrollers;


