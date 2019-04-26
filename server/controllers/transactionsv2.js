import pool from '../database/connect';
import validatetransactions from '../helpers/transactions';
import jwt from 'jsonwebtoken';
const Transact = {
    async creditaccount(req, res) {
        if (!req.body.amount) {
            return res.status(400).send({
                'message': 'amount is  missing'
            });
        }
        const creditquery = `INSERT INTO transactions (createdOn,type,accountNumber,cashier,amount,oldBalance,newBalance)
		VALUES($1,$2,$3,$4,$5,$6,$7) returning *`;
        let accountnumber = req.params.accountnumber;
        let typee = "credit";
        let date = new Date();
        let amount = req.body.amount;
        if (!amount) {
            console.log("amount is missing");
        } else {
            const token = req.headers['x-access-token'];
            if (!token) {
                return res.status(400).send({
                    'message': ' Forbidden Token is not provided'
                });
            }
            try {
                const decoded = await jwt.verify(token, process.env.SECRET);
                const text = 'SELECT * FROM users WHERE id=$1';
                console.log(decoded);
                const {
                    rows
                } = await pool.query(text, [decoded.data.userId]);
                if (!rows[0]) {
                    return res.status(400).send({
                        'message': 'the user with this id not found'
                    });
                }
                if (decoded.data.type != 'staff') {
                    return res.status(401).send({
                        status: 401,
                        'message': "You are not authorized only staff"
                    })
                }
            } catch (error) {
                return res.status(401).send({
                    message: error.message
                })
            }
        }
        let values = [
            date,
            typee,
            accountnumber,
            req.body.cashier,
            req.body.amount,
            req.body.balance,
            req.body.newbalance
        ];
        try {
            const {
                rows
            } = await pool.query(creditquery, values);
            return res.status(201).json({
                status: 201,
                message: "sucessfully credited",
                data: {
                    transactionid: rows[0].transactionid,
                    accountnumber: rows[0].accountNumber,
                    amount: rows[0].amount,
                    cashier: rows[0].cashier,
                    transactionType: rows[0].type,
                    accountBalance: rows[0].newbalance
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(404).send({
                message: error.message
            });
        }
    },
    async debitaccount(req, res) {
        if (!req.body.amount) {
            return res.status(400).send({
                'message': 'amount is  missing'
            });
        }
        const creditquery = `INSERT INTO transactions (createdOn,type,accountNumber,cashier,amount,oldBalance,newBalance)
		VALUES($1,$2,$3,$4,$5,$6,$7) returning *`;
        let accountnumber = req.params.accountnumber;
        let typee = "credit";
        let date = new Date();
        let amount = req.body.amount;
        if (!amount) {
            console.log("amount is missing");
        } else {
            const token = req.headers['x-access-token'];
            if (!token) {
                return res.status(400).send({
                    'message': ' Forbidden Token is not provided'
                });
            }
            try {
                const decoded = await jwt.verify(token, process.env.SECRET);
                const text = 'SELECT * FROM users WHERE id=$1';
                console.log(decoded);
                const {
                    rows
                } = await pool.query(text, [decoded.data.userId]);
                if (!rows[0]) {
                    return res.status(400).send({
                        'message': 'the user with this id not found'
                    });
                }
                if (decoded.data.type != 'staff') {
                    return res.status(401).send({
                        status: 401,
                        'message': "You are not authorized only staff"
                    })
                }
            } catch (error) {
                return res.status(401).send({
                    message: error.message
                })
            }
        }
        let values = [
            date,
            typee,
            accountnumber,
            req.body.cashier,
            req.body.amount,
            req.body.balance,
            req.body.newbalance
        ];
        try {
            const {
                rows
            } = await pool.query(creditquery, values);
            return res.status(201).json({
                status: 201,
                message: "sucessfully debited",
                data: {
                    transactionid: rows[0].transactionid,
                    accountnumber: rows[0].accountNumber,
                    amount: rows[0].amount,
                    cashier: rows[0].cashier,
                    transactionType: rows[0].type,
                    accountBalance: rows[0].newbalance
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(404).send({
                message: error.message
            });
        }
    }
}
export default Transact;