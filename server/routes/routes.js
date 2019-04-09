import express from 'express';
import users_db from '../models/users';
import Userscontrollers from '../controllers/users';
import BankAccountscontrollers from '../controllers/create_bank_accounts';
const router=express.Router();
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
export default router;