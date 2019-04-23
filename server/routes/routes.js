import express from 'express';
import users_db from '../models/users';
import Userscontrollers from '../controllers/users';
import BankAccountscontrollers from '../controllers/create_bank_accounts';
import Transactioncontrollers from '../controllers/transactions';
import User from '../controllers/usersv2';
import accounts from '../controllers/create_bank_accountsv2';
import auth from '../middlewares/authorizations';
const {create,login,getall,getone,deleteuser}=User;
const {createaccounts}=accounts;
const usersv2Router=express.Router();
const router=express.Router();
//usersv2 endpoints
usersv2Router.post('/api/v2/auth/signup',create);
usersv2Router.post('/api/v2/auth/signin',login);
usersv2Router.get('/api/v2/users',getall);
usersv2Router.get('/api/v2/users/:id',getone);
usersv2Router.delete('/api/v2/users/:id',auth.verifyToken,deleteuser);
//accountsv2 endpoints
usersv2Router.post('/api/v2/accounts',createaccounts);
//users endpoints 
router.get('/api/v1/users',Userscontrollers.getAllusers);
router.post('/api/v1/auth/signup',Userscontrollers.Usersignup);
router.post('/api/v1/auth/signin',Userscontrollers.Usersignin);
router.get('/api/v1/users/:id',Userscontrollers.getOneuser);
router.delete('/api/v1/users/:id',Userscontrollers.deleteUser);
router.put('/api/v1/users/:id',Userscontrollers.updateUser);

//bank accounts endpoints
router.post('/api/v1/accounts',BankAccountscontrollers.createAccount);
router.get('/api/v1/accounts',BankAccountscontrollers.getbankAccounts);
router.put('/api/v1/accounts/:accountNumber',BankAccountscontrollers.deactivateAccounts);
router.delete('/api/v1/accounts/:accountNumber',BankAccountscontrollers.deleteAccounts);
//transactions endpoints
router.post('/api/v1/transactions/debit/:accountNumber',Transactioncontrollers.createTransactions);
router.post('/api/v1/transactions/credit/:accountNumber',Transactioncontrollers.createTransactionscredit);
router.get('/api/v1/transactions',Transactioncontrollers.getAlltransactions);
export default usersv2Router;
