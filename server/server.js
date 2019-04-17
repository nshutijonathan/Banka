import express from 'express';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(express.json());
//create home routes
app.get('/',(req,res)=>{
	return res.status(200).send({
		status:200,
		message:"Welcome to Banka!!",
	});
});
const port=process.env.PORT ||3000;
app.listen(port,()=> console.log(`listening on port ${port}`));
export default app;