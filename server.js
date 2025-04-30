const express = require('express')
const app = express()

app.use(express.json)



app.get('/',(req,res)=>{
  res.send("working")
})

app.post('/',(req,res)=>{
  const {username , email ,pass,dob} = req.body

  if(!username){
    res.status(400).json({error:"Username cannot be empty"})
  }
  if(!email){
    res.status(400).json({error:"Email cannot be empty"})
  }
  if(!pass|| pass<8||pass>16){
    res.status(400).json({error:"Password length should be greater than 8 or less than or qual to 16"})
  }
})

app.listen(3000,()=>{
  console.log(`server is running on http://localhost:3000`)
})