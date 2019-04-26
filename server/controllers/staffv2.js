import pool from '../database/connect';
import jwt from 'jsonwebtoken';
import validateUser from '../helpers/validations';
import usershelpers from '../middlewares/users';
const staff = {
    async createstaff(req, res) {
        const hashpassword = usershelpers.hashPassword(req.body.password);
        const createQuery = `INSERT INTO 
users(email,firstname,lastname,password,type,isadmin)
VALUES($1,$2,$3,$4,$5,$6)returning *`;
        const values = [
            req.body.email,
            req.body.firstName,
            req.body.lastName,
            hashpassword,
            req.body.type,
            req.body.isAdmin
        ];
        let email = req.body.email;
        let firstname = req.body.firstName;
        let lastname = req.body.lastName;
        let password = hashpassword;
        let type = req.body.type;
        let isadmin = req.body.isAdmin;
        try {
            if (validateUser.validatesignup(req, res)) {
                const {
                    rows
                } = await pool.query(createQuery, values, );
                const token = usershelpers.generateToken(rows[0].id);
                if (type === "staff" && isadmin === "false") {
                    return res.status(201).send({
                        token,
                        status: 201,
                        'message': "staff signed up Successfully",
                        email,
                        firstname,
                        lastname,
                        type,
                        isadmin
                    });
                } else {
                    res.status(401).send({
                        status: 401,
                        message: "You are not a staff"
                    })
                }
            }
        } catch (error) {
            if (error.routine === '_bt_check_unique') {
                return res.status(401).send({
                    status: 401,
                    'error': 'staff with that EMAIL already exist'
                })
            }
            if (error) {
                return res.status(401).send({
                    error: error.message
                })
            }
        }
    },
    async loginstaff(req, res) {
        try {
            if (!req.body.email || !req.body.password) {
                return res.status(401).send({
                    status: 401,
                    'error': 'Some values are missing'
                });
            }
            if (validateUser.validatesignin(req, res)) {
                const text = 'SELECT * FROM users WHERE email = $1';
                const values = [
                    req.body.email,
                    req.body.password
                ];
                const {
                    rows
                } = await pool.query(text, [req.body.email]);
                if (!rows[0]) {
                    return res.status(401).send({
                        status: 401,
                        'error': 'INVALID email or password'
                    });
                }
                if (!usershelpers.comparePassword(rows[0].password, req.body.password)) {
                    return res.status(401).send({
                        status: 401,
                        'error': 'INVALID email or password'
                    });
                } else {
                    const token = usershelpers.generateToken(rows[0].id);
                    return res.status(200).send({
                        status: 200,
                        data: {
                            token,
                            message: " staff Successfully Logged in"
                        }
                    })
                }
            }
        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    },
}
export default staff;