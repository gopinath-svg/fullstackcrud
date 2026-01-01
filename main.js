import express from 'express'
import moviesRoute from "./routes/movies.route.js";
import connectDB from './lib/db.js';
const app = express();
const PORT = 3000;


//connect db
connectDB();

app.get('/',(req,res)=>{
  res.json({msg:"hello students"})
})

//CRUD functionality of movies
//client -> middleware -> server

app.use('/movies',moviesRoute);


app.listen(PORT,()=>{
  console.log(`server run port http://localhost:${PORT}`);
  
})