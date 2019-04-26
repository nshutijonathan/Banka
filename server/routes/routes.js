import express from 'express';
import User from '../controllers/usersv2';
import staff from '../controllers/staffv2';
import accounts from '../controllers/create_bank_accountsv2';
import Transact from '../controllers/transactionsv2';
import auth from '../middlewares/authorizations';
const {
    create,
    login,
    getall,
    getone,
    deleteuser
} = User;
const {
    createaccounts,
    Getallaccounts,
    getoneaccount,
    deletebankaccount,
    updatebankaccount
} = accounts;
const {
    createstaff,
    loginstaff
} = staff;
const {creditaccount,debitaccount}=Transact ;
const usersv2Router = express.Router();
//usersv2 endpoints
usersv2Router.post('/api/v2/auth/signup', create);
usersv2Router.post('/api/v2/auth/signin', login);
usersv2Router.get('/api/v2/users',auth.verifyToken,getall);
usersv2Router.get('/api/v2/users/:id',auth.verifyToken,getone);
usersv2Router.delete('/api/v2/users/:id',auth.verifyToken,deleteuser);
//usersv2Router.delete('/api/v2/users/:id',auth.verifyToken,deleteuser);
//accountsv2 endpoints
usersv2Router.post('/api/v2/accounts', createaccounts);
usersv2Router.get('/api/v2/accounts',auth.verifyToken,Getallaccounts);
usersv2Router.get('/api/v2/accounts/:accountnumber',auth.verifyToken,getoneaccount);
usersv2Router.delete('/api/v2/accounts/:accountnumber',auth.verifyToken,deletebankaccount);
usersv2Router.put('/api/v2/accounts/:accountnumber',auth.verifyToken,updatebankaccount);
//
//transactions version2 endpoints
usersv2Router.post('/api/v2/transactions/:accountnumber/debit',debitaccount);
usersv2Router.post('/api/v2/transactions/:accountnumber/credit',creditaccount);
export default usersv2Router;