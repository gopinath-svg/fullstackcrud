import express from 'express'
const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
  res.json({msg:"hello students"})
})

app.listen(PORT,()=>{
  console.log(`server run port http://localhost:${PORT}`);
  
})