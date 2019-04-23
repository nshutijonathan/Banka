import jwt from 'jsonwebtoken';
import pool from '../database/connect';
const auth={
	async verifyToken(req,res,next){
		const token=req.headers['x-access-token'];
		if (!token) {
			return res.status(400).send({ 'message': ' Forbidden Token is not provided' });
		}
		try{
			const decoded=await jwt.verify(token,process.env.SECRET);
			const text='SELECT * FROM users WHERE id=$1';
			const {rows}=await pool.query(text,[decoded.userId]);
			if (!rows[0]) {
				return res.status(400).send({ 'message': 'the user with this id not found' });
			}
			req.user={id:decoded.userId};
			next();
		}
		catch(error){
			return res.status(400).send(error);
			if (error) {
				console.log(error);
			}

		}

	}
}
export default auth;