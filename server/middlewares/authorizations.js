const getToken=(req,res,next)=>{
	const bearerHeader=req.headers.authorization;
	if(typeof bearerHeader==='undefined'){
		return res.status(401).send({
			status:401,
			error:"Forbidden a token must  be provided"
		})
	}
	const bearerToken=bearerHeader.split('');
	const token=bearerToken([1]);
	req.token=token;
	next();
}
export default getToken;