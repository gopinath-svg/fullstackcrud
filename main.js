import express from 'express'
const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
  res.json({msg:"hello students"})
})

//CRUD functionality of movies
//R - for reading
app.get('/movies',()=>{

})

//c - for creating

app.post('/movies',()=>{
  
})

//u-for update
app.put('/movies/:id',()=>{
  
})

//D - for delete
app.delete('/movies/:id',()=>{
  
})

app.listen(PORT,()=>{
  console.log(`server run port http://localhost:${PORT}`);
  
})