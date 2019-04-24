import express from 'express';
import User from '../controllers/usersv2';
import staff from '../controllers/staffv2';
import accounts from '../controllers/create_bank_accountsv2';
import auth from '../middlewares/authorizations';
const {create,login,getall,getone,deleteuser}=User;
const {createaccounts}=accounts;
const {createstaff,loginstaff}=staff;
const usersv2Router=express.Router();
//usersv2 endpoints
usersv2Router.post('/api/v2/auth/signup',create);
usersv2Router.post('/api/v2/auth/signin',login);
usersv2Router.get('/api/v2/clients',auth.verifyToken,getall);
usersv2Router.get('/api/v2/clients/:id',auth.verifyToken,getone);
usersv2Router.delete('/api/v2/clients/:id',auth.verifyToken,deleteuser);
//Usersv2 create user as staff
usersv2Router.post('/api/v2/auth/signup/staff',auth.verifyToken,createstaff);
usersv2Router.post('/api/v2/auth/signin/staff',auth.verifyToken,loginstaff);
//accountsv2 endpoints
usersv2Router.post('/api/v2/accounts',auth.verifyToken,createaccounts);

export default usersv2Router;
