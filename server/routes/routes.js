import express from 'express';
import User from '../controllers/usersv2';
import staff from '../controllers/staffv2';
import accounts from '../controllers/create_bank_accountsv2';
import auth from '../middlewares/authorizations';
const {create,login,getall,getone,deleteuser}=User;
const {createaccounts, Getallaccounts,getoneaccount,deletebankaccount}=accounts;
const {createstaff,loginstaff}=staff;
const usersv2Router=express.Router();
//usersv2 endpoints
usersv2Router.post('/api/v2/auth/signup',create);
usersv2Router.post('/api/v2/auth/signin',login);
usersv2Router.get('/api/v2/users',getall);
usersv2Router.get('/api/v2/users/:id',getone);
usersv2Router.delete('/api/v2/users/:id',deleteuser);
//usersv2Router.delete('/api/v2/users/:id',auth.verifyToken,deleteuser);

//accountsv2 endpoints
usersv2Router.post('/api/v2/accounts',createaccounts);
usersv2Router.get('/api/v2/accounts',Getallaccounts);
usersv2Router.get('/api/v2/accounts/:accountnumber',getoneaccount);
usersv2Router.delete('/api/v2/accounts/:accountnumber',deletebankaccount);
export default usersv2Router;
